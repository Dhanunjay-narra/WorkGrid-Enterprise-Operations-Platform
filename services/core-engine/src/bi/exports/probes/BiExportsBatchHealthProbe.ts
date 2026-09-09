export class BiExportsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiExportsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiExportsBatch" };
  }
}
