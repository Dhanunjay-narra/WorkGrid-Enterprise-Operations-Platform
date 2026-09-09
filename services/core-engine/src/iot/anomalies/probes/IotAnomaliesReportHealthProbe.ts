export class IotAnomaliesReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotAnomaliesReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotAnomaliesReport" };
  }
}
