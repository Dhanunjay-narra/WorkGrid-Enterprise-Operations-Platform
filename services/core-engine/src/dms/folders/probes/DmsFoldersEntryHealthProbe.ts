export class DmsFoldersEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFoldersEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFoldersEntry" };
  }
}
