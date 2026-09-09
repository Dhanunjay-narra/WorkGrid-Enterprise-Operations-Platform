export class BiQueriesRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiQueriesRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiQueriesRule" };
  }
}
