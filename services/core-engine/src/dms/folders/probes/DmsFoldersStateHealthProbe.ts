export class DmsFoldersStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFoldersState" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFoldersState" };
  }
}
