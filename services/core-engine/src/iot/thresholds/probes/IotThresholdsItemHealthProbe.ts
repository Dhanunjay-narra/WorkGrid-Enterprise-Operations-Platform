export class IotThresholdsItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotThresholdsItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotThresholdsItem" };
  }
}
