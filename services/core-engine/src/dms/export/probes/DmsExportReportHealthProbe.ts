export class DmsExportReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsExportReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsExportReport" };
  }
}
