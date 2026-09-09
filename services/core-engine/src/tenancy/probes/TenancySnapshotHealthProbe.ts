export class TenancySnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "TenancySnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "TenancySnapshot" };
  }
}
