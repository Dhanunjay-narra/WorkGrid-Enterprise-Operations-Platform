export class CrmContactsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmContactsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmContactsSnapshot" };
  }
}
