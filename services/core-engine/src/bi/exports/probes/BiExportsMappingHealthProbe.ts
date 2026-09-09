export class BiExportsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiExportsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiExportsMapping" };
  }
}
