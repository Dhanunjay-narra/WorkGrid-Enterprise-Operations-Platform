export class TenancyReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "TenancyReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "TenancyReport" };
  }
}
