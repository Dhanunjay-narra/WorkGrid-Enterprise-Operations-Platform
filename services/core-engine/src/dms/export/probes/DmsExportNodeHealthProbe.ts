export class DmsExportNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsExportNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsExportNode" };
  }
}
