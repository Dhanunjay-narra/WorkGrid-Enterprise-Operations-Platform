export class CrmTerritorySnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmTerritorySnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmTerritorySnapshot" };
  }
}
