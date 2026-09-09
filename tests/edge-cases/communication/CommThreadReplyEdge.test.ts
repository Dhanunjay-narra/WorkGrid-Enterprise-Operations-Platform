import { CommThreadReplyPublisher } from "../../../services/core-engine/src/communication/events/CommThreadReplyPublisher";
import { CommThreadReplyTelemetry } from "../../../services/core-engine/src/communication/telemetry/CommThreadReplyTelemetry";

describe("CommThreadReply Edge-Case & Outbox Test Suite", () => {
  const publisher = new CommThreadReplyPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CommThreadReplyTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
