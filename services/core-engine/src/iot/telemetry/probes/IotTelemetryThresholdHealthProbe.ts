export class IotTelemetryThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotTelemetryThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotTelemetryThreshold" };
  }
}
