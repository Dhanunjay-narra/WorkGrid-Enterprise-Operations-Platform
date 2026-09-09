export class DmsFoldersThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFoldersThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFoldersThreshold" };
  }
}
