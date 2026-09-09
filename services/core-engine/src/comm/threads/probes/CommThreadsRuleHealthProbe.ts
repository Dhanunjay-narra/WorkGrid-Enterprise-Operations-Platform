export class CommThreadsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommThreadsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommThreadsRule" };
  }
}
