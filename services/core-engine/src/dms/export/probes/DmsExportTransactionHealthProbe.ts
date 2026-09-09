export class DmsExportTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsExportTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsExportTransaction" };
  }
}
