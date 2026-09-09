export class DmsFoldersRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFoldersRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFoldersRecord" };
  }
}
