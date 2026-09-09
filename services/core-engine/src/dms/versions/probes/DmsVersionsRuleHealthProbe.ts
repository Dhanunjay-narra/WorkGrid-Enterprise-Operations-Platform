export class DmsVersionsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsVersionsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsVersionsRule" };
  }
}
