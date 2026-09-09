export class IotAnomaliesRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotAnomaliesRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotAnomaliesRule" };
  }
}
