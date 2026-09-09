export class DmsFoldersEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFoldersEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFoldersEvent" };
  }
}
