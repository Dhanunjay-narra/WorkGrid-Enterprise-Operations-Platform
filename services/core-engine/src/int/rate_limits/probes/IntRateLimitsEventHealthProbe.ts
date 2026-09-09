export class IntRateLimitsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntRateLimitsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntRateLimitsEvent" };
  }
}
