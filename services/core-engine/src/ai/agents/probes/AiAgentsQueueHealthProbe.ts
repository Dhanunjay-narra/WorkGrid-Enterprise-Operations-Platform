export class AiAgentsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiAgentsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiAgentsQueue" };
  }
}
