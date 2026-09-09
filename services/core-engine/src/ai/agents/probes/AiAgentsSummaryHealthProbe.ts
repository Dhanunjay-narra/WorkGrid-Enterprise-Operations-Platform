export class AiAgentsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiAgentsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiAgentsSummary" };
  }
}
