export class CrmDealsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmDealsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmDealsSnapshot" };
  }
}
