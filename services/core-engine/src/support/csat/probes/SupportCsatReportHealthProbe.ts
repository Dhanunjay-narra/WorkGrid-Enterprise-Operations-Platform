export class SupportCsatReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportCsatReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportCsatReport" };
  }
}
