export class IntRateLimitsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntRateLimitsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntRateLimitsNode" };
  }
}
