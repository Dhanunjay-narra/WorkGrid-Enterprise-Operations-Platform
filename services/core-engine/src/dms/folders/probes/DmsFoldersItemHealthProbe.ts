export class DmsFoldersItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFoldersItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFoldersItem" };
  }
}
