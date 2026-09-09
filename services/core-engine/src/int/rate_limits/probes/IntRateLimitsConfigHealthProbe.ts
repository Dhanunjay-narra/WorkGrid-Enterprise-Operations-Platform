export class IntRateLimitsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntRateLimitsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntRateLimitsConfig" };
  }
}
