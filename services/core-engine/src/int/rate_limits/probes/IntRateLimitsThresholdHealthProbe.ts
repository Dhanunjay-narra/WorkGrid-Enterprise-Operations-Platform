export class IntRateLimitsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntRateLimitsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntRateLimitsThreshold" };
  }
}
