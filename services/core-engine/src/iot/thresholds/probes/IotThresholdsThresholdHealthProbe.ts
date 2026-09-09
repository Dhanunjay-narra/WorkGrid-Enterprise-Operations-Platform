export class IotThresholdsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotThresholdsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotThresholdsThreshold" };
  }
}
