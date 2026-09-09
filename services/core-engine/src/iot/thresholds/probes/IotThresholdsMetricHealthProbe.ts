export class IotThresholdsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotThresholdsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotThresholdsMetric" };
  }
}
