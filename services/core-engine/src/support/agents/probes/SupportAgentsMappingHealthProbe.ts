export class SupportAgentsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportAgentsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportAgentsMapping" };
  }
}
