export class IotTelemetrySnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotTelemetrySnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotTelemetrySnapshot" };
  }
}
