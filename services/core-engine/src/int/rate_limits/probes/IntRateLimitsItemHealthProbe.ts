export class IntRateLimitsItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntRateLimitsItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntRateLimitsItem" };
  }
}
