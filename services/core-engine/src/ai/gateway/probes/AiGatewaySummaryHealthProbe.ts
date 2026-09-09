export class AiGatewaySummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiGatewaySummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiGatewaySummary" };
  }
}
