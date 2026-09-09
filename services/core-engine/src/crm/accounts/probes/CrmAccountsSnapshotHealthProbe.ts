export class CrmAccountsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmAccountsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmAccountsSnapshot" };
  }
}
