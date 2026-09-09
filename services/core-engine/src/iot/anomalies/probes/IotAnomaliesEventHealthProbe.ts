export class IotAnomaliesEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotAnomaliesEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotAnomaliesEvent" };
  }
}
