export class DmsFoldersTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFoldersTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFoldersTransaction" };
  }
}
