export class IotAnomaliesPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotAnomaliesPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotAnomaliesPolicy" };
  }
}
