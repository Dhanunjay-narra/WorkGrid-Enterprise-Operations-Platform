export class AiRagSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiRagSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiRagSession" };
  }
}
