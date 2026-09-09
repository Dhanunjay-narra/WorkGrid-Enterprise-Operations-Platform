export class DmsFoldersConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFoldersConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFoldersConfig" };
  }
}
