export class IntSlackRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSlackRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSlackRule" };
  }
}
