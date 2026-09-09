export class AbacRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AbacRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "AbacRule" };
  }
}
