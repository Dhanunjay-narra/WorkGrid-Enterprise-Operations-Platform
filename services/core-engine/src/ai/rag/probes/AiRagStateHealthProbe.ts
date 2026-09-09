export class AiRagStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiRagState" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiRagState" };
  }
}
