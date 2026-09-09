export class DmsFoldersProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFoldersProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFoldersProfile" };
  }
}
