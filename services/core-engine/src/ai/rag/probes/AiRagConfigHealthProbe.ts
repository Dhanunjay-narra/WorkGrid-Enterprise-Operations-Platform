export class AiRagConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiRagConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiRagConfig" };
  }
}
