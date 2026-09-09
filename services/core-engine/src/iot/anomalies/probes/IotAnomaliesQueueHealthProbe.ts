export class IotAnomaliesQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotAnomaliesQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotAnomaliesQueue" };
  }
}
