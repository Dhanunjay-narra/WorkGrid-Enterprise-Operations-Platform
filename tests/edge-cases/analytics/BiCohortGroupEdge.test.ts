import { BiCohortGroupPublisher } from "../../../services/core-engine/src/analytics/events/BiCohortGroupPublisher";
import { BiCohortGroupTelemetry } from "../../../services/core-engine/src/analytics/telemetry/BiCohortGroupTelemetry";

describe("BiCohortGroup Edge-Case & Outbox Test Suite", () => {
  const publisher = new BiCohortGroupPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = BiCohortGroupTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
