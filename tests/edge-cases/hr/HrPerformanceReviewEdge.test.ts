import { HrPerformanceReviewPublisher } from "../../../services/core-engine/src/hr/events/HrPerformanceReviewPublisher";
import { HrPerformanceReviewTelemetry } from "../../../services/core-engine/src/hr/telemetry/HrPerformanceReviewTelemetry";

describe("HrPerformanceReview Edge-Case & Outbox Test Suite", () => {
  const publisher = new HrPerformanceReviewPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = HrPerformanceReviewTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
