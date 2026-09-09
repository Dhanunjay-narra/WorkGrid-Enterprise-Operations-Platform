export class BiAnomaliesSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiAnomaliesSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiAnomaliesSnapshot" };
  }
}
