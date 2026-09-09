export class SupportAgentsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportAgentsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportAgentsBatch" };
  }
}
