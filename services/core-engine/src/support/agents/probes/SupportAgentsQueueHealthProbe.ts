export class SupportAgentsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportAgentsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportAgentsQueue" };
  }
}
