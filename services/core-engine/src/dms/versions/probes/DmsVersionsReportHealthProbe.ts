export class DmsVersionsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsVersionsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsVersionsReport" };
  }
}
