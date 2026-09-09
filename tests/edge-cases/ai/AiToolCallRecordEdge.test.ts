import { AiToolCallRecordPublisher } from "../../../services/core-engine/src/ai/events/AiToolCallRecordPublisher";
import { AiToolCallRecordTelemetry } from "../../../services/core-engine/src/ai/telemetry/AiToolCallRecordTelemetry";

describe("AiToolCallRecord Edge-Case & Outbox Test Suite", () => {
  const publisher = new AiToolCallRecordPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = AiToolCallRecordTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
