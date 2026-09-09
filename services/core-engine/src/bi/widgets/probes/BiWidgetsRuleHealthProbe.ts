export class BiWidgetsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiWidgetsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiWidgetsRule" };
  }
}
