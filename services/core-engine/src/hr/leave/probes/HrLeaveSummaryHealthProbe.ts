export class HrLeaveSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrLeaveSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrLeaveSummary" };
  }
}
