export class IotTelemetryStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotTelemetryState" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotTelemetryState" };
  }
}
