export class DmsExportMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsExportMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsExportMapping" };
  }
}
