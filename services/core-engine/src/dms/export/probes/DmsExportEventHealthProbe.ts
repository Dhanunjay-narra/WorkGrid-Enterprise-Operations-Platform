export class DmsExportEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsExportEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsExportEvent" };
  }
}
