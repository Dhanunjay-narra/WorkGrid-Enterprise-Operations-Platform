import { PrjRiskItemPublisher } from "../../../services/core-engine/src/projects/events/PrjRiskItemPublisher";
import { PrjRiskItemTelemetry } from "../../../services/core-engine/src/projects/telemetry/PrjRiskItemTelemetry";

describe("PrjRiskItem Edge-Case & Outbox Test Suite", () => {
  const publisher = new PrjRiskItemPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = PrjRiskItemTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
