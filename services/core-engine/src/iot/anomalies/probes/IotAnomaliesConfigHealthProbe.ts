export class IotAnomaliesConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotAnomaliesConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotAnomaliesConfig" };
  }
}
