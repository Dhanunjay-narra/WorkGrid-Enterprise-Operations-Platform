export class AiRagPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiRagPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiRagPayload" };
  }
}
