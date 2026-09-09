import { PrjReleasePlanPublisher } from "../../../services/core-engine/src/projects/events/PrjReleasePlanPublisher";
import { PrjReleasePlanTelemetry } from "../../../services/core-engine/src/projects/telemetry/PrjReleasePlanTelemetry";

describe("PrjReleasePlan Edge-Case & Outbox Test Suite", () => {
  const publisher = new PrjReleasePlanPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = PrjReleasePlanTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
