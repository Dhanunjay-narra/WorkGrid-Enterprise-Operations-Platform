export class IntRateLimitsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntRateLimitsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntRateLimitsQueue" };
  }
}
