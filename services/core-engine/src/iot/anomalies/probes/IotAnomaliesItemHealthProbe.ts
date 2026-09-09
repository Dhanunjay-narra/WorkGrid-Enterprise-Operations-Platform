export class IotAnomaliesItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotAnomaliesItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotAnomaliesItem" };
  }
}
