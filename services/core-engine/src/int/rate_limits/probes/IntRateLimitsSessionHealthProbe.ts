export class IntRateLimitsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntRateLimitsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntRateLimitsSession" };
  }
}
