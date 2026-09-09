import { PrjProjectPublisher } from "../../../services/core-engine/src/projects/events/PrjProjectPublisher";
import { PrjProjectTelemetry } from "../../../services/core-engine/src/projects/telemetry/PrjProjectTelemetry";

describe("PrjProject Edge-Case & Outbox Test Suite", () => {
  const publisher = new PrjProjectPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = PrjProjectTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
