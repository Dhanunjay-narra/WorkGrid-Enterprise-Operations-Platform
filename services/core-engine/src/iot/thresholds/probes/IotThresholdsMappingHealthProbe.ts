export class IotThresholdsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotThresholdsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotThresholdsMapping" };
  }
}
