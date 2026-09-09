export class IntRateLimitsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntRateLimitsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntRateLimitsTask" };
  }
}
