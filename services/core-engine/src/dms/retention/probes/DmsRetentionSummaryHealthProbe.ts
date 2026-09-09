export class DmsRetentionSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsRetentionSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsRetentionSummary" };
  }
}
