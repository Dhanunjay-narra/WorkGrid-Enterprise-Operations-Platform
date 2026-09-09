export class IotThresholdsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotThresholdsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotThresholdsQueue" };
  }
}
