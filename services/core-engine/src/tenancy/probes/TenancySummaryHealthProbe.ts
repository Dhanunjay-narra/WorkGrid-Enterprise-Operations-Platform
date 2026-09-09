export class TenancySummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "TenancySummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "TenancySummary" };
  }
}
