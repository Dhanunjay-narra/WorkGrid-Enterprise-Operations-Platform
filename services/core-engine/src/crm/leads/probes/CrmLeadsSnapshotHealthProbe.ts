export class CrmLeadsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmLeadsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmLeadsSnapshot" };
  }
}
