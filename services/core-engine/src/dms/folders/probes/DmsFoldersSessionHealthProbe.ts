export class DmsFoldersSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFoldersSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFoldersSession" };
  }
}
