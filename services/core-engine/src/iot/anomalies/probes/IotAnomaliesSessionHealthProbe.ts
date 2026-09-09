export class IotAnomaliesSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotAnomaliesSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotAnomaliesSession" };
  }
}
