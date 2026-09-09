export class AiRagItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiRagItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiRagItem" };
  }
}
