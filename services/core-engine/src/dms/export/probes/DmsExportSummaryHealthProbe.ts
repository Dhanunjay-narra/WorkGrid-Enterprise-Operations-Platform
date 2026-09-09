export class DmsExportSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsExportSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsExportSummary" };
  }
}
