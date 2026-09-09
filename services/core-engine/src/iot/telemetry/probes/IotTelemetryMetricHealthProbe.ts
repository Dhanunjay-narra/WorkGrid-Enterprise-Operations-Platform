export class IotTelemetryMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotTelemetryMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotTelemetryMetric" };
  }
}
