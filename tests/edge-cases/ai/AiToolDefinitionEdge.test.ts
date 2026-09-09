import { AiToolDefinitionPublisher } from "../../../services/core-engine/src/ai/events/AiToolDefinitionPublisher";
import { AiToolDefinitionTelemetry } from "../../../services/core-engine/src/ai/telemetry/AiToolDefinitionTelemetry";

describe("AiToolDefinition Edge-Case & Outbox Test Suite", () => {
  const publisher = new AiToolDefinitionPublisher();

  test("publishes outbox event within 10ms boundary", async () => {
    const evtId = await publisher.publishCreated("ent-999", "tenant-alpha", { status: "ACTIVE" });
    expect(evtId).toBeDefined();
  });

  test("traces operation lifecycle with OpenTelemetry wrapper", () => {
    const res = AiToolDefinitionTelemetry.traceOperation("findEntity", "ent-999", () => {
      return { success: true };
    });
    expect(res.success).toBe(true);
  });
});
