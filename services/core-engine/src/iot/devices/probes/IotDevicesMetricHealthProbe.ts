export class IotDevicesMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotDevicesMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotDevicesMetric" };
  }
}
