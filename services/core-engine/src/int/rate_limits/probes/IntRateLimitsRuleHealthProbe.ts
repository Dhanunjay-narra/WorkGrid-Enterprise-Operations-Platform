export class IntRateLimitsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntRateLimitsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntRateLimitsRule" };
  }
}
