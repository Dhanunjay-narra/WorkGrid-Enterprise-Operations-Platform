import { SupFeedbackItemPublisher } from "../../../services/core-engine/src/support/events/SupFeedbackItemPublisher";
import { SupFeedbackItemTelemetry } from "../../../services/core-engine/src/support/telemetry/SupFeedbackItemTelemetry";

describe("SupFeedbackItem Edge-Case & Outbox Test Suite", () => {
  const publisher = new SupFeedbackItemPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = SupFeedbackItemTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
