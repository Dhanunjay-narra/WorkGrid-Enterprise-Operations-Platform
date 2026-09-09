export class BiForecastsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiForecastsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiForecastsRule" };
  }
}
