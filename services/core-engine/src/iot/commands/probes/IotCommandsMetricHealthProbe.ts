export class IotCommandsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotCommandsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotCommandsMetric" };
  }
}
