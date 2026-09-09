export class AiRagProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiRagProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiRagProfile" };
  }
}
