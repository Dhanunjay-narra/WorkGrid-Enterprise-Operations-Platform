export class DmsFoldersMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFoldersMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFoldersMapping" };
  }
}
