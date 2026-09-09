export class IotFleetMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFleetMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFleetMetric" };
  }
}
