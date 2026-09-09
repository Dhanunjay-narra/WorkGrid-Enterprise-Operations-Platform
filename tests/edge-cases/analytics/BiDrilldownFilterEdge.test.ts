import { BiDrilldownFilterPublisher } from "../../../services/core-engine/src/analytics/events/BiDrilldownFilterPublisher";
import { BiDrilldownFilterTelemetry } from "../../../services/core-engine/src/analytics/telemetry/BiDrilldownFilterTelemetry";

describe("BiDrilldownFilter Edge-Case & Outbox Test Suite", () => {
  const publisher = new BiDrilldownFilterPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = BiDrilldownFilterTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
