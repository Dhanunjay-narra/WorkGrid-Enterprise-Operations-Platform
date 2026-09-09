export class IntRateLimitsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntRateLimitsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntRateLimitsPolicy" };
  }
}
