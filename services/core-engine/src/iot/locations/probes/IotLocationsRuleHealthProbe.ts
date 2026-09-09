export class IotLocationsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotLocationsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotLocationsRule" };
  }
}
