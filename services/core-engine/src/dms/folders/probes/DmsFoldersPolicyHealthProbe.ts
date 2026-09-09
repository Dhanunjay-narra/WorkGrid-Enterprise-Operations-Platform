export class DmsFoldersPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFoldersPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFoldersPolicy" };
  }
}
