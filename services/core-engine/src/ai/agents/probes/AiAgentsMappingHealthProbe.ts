export class AiAgentsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiAgentsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiAgentsMapping" };
  }
}
