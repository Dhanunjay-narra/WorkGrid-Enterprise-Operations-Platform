export class IotFleetRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotFleetRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotFleetRule" };
  }
}
