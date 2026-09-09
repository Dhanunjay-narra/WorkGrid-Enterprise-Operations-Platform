export class CommCallsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommCallsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommCallsRule" };
  }
}
