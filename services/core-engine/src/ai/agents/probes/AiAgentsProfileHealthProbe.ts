export class AiAgentsProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiAgentsProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiAgentsProfile" };
  }
}
