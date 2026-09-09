export class IotThresholdsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotThresholdsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotThresholdsBatch" };
  }
}
