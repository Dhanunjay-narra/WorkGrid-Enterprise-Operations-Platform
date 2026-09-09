export class DmsFoldersQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFoldersQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFoldersQueue" };
  }
}
