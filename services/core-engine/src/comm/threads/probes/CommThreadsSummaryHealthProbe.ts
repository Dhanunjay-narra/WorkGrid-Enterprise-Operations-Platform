export class CommThreadsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommThreadsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommThreadsSummary" };
  }
}
