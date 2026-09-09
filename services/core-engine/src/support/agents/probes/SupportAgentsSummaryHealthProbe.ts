export class SupportAgentsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportAgentsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportAgentsSummary" };
  }
}
