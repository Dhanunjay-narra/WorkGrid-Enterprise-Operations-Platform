export class AiRagEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiRagEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiRagEvent" };
  }
}
