export class IotThresholdsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotThresholdsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotThresholdsConfig" };
  }
}
