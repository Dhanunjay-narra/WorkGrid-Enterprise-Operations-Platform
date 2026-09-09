export class IotThresholdsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotThresholdsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotThresholdsPolicy" };
  }
}
