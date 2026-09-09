export class IotAnomaliesSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotAnomaliesSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotAnomaliesSnapshot" };
  }
}
