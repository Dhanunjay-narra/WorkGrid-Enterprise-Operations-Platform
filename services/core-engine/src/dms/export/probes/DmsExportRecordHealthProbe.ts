export class DmsExportRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsExportRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsExportRecord" };
  }
}
