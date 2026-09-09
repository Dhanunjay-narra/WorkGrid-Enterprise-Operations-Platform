export class IotAnomaliesMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotAnomaliesMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotAnomaliesMetric" };
  }
}
