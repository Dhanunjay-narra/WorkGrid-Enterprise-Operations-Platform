export class IotThresholdsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotThresholdsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotThresholdsEvent" };
  }
}
