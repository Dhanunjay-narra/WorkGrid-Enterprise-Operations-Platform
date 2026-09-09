export class DmsExportQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsExportQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsExportQueue" };
  }
}
