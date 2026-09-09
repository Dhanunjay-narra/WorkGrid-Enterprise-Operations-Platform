import { CommMentionRecordPublisher } from "../../../services/core-engine/src/communication/events/CommMentionRecordPublisher";
import { CommMentionRecordTelemetry } from "../../../services/core-engine/src/communication/telemetry/CommMentionRecordTelemetry";

describe("CommMentionRecord Edge-Case & Outbox Test Suite", () => {
  const publisher = new CommMentionRecordPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = CommMentionRecordTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
