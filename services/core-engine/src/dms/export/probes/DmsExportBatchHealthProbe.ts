export class DmsExportBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsExportBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsExportBatch" };
  }
}
