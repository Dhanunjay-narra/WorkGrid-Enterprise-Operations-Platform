export class DmsFoldersNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFoldersNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFoldersNode" };
  }
}
