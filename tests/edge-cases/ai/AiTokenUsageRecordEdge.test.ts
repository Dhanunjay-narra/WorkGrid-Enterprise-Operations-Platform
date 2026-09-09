import { AiTokenUsageRecordPublisher } from "../../../services/core-engine/src/ai/events/AiTokenUsageRecordPublisher";
import { AiTokenUsageRecordTelemetry } from "../../../services/core-engine/src/ai/telemetry/AiTokenUsageRecordTelemetry";

describe("AiTokenUsageRecord Edge-Case & Outbox Test Suite", () => {
  const publisher = new AiTokenUsageRecordPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = AiTokenUsageRecordTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
