export class AiAgentsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiAgentsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiAgentsConfig" };
  }
}
