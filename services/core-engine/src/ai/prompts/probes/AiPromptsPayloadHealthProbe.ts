export class AiPromptsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiPromptsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiPromptsPayload" };
  }
}
