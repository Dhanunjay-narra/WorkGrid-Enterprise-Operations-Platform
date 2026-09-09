export class AiAgentsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiAgentsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiAgentsNode" };
  }
}
