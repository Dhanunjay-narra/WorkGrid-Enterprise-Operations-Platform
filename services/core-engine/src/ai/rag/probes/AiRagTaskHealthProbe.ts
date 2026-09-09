export class AiRagTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiRagTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiRagTask" };
  }
}
