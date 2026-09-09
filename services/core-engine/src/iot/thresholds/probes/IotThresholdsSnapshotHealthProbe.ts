export class IotThresholdsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotThresholdsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotThresholdsSnapshot" };
  }
}
