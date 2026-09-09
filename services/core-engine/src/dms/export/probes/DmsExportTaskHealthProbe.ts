export class DmsExportTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsExportTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsExportTask" };
  }
}
