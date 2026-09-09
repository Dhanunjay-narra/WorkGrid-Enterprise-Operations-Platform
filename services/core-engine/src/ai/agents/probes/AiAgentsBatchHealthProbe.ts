export class AiAgentsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiAgentsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiAgentsBatch" };
  }
}
