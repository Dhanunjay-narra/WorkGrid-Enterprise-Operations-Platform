export class IotAnomaliesSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotAnomaliesSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotAnomaliesSummary" };
  }
}
