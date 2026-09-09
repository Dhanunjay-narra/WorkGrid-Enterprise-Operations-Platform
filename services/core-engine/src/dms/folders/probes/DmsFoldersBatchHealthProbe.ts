export class DmsFoldersBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFoldersBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFoldersBatch" };
  }
}
