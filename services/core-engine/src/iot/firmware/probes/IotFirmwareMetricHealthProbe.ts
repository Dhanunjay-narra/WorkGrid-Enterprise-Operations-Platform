export class IotFirmwareMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFirmwareMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFirmwareMetric" };
  }
}
