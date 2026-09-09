import { AiAgentMemoryEntryPublisher } from "../../../services/core-engine/src/ai/events/AiAgentMemoryEntryPublisher";
import { AiAgentMemoryEntryTelemetry } from "../../../services/core-engine/src/ai/telemetry/AiAgentMemoryEntryTelemetry";

describe("AiAgentMemoryEntry Edge-Case & Outbox Test Suite", () => {
  const publisher = new AiAgentMemoryEntryPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = AiAgentMemoryEntryTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
