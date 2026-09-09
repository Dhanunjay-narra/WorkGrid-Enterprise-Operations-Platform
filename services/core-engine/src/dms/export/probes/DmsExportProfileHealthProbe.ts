export class DmsExportProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsExportProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsExportProfile" };
  }
}
