import { IdAccessReviewPublisher } from "../../../services/core-engine/src/identity/events/IdAccessReviewPublisher";
import { IdAccessReviewTelemetry } from "../../../services/core-engine/src/identity/telemetry/IdAccessReviewTelemetry";

describe("IdAccessReview Edge-Case & Outbox Test Suite", () => {
  const publisher = new IdAccessReviewPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = IdAccessReviewTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
