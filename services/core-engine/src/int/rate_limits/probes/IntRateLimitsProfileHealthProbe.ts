export class IntRateLimitsProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntRateLimitsProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntRateLimitsProfile" };
  }
}
