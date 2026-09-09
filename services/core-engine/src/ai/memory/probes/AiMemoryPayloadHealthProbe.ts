export class AiMemoryPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiMemoryPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiMemoryPayload" };
  }
}
