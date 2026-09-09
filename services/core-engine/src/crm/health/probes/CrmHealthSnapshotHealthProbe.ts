export class CrmHealthSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmHealthSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmHealthSnapshot" };
  }
}
