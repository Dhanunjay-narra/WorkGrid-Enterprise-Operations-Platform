export class IotLocationsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotLocationsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotLocationsMetric" };
  }
}
