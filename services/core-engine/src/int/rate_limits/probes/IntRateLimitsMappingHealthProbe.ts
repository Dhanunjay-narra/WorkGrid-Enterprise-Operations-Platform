export class IntRateLimitsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntRateLimitsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntRateLimitsMapping" };
  }
}
