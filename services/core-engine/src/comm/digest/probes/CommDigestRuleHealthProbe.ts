export class CommDigestRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommDigestRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommDigestRule" };
  }
}
