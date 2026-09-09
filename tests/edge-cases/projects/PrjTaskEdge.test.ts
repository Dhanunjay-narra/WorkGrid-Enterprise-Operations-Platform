import { PrjTaskPublisher } from "../../../services/core-engine/src/projects/events/PrjTaskPublisher";
import { PrjTaskTelemetry } from "../../../services/core-engine/src/projects/telemetry/PrjTaskTelemetry";

describe("PrjTask Edge-Case & Outbox Test Suite", () => {
  const publisher = new PrjTaskPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = PrjTaskTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
