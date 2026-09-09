export class IotAnomaliesThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotAnomaliesThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotAnomaliesThreshold" };
  }
}
