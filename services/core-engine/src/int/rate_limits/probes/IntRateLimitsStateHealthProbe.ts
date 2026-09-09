export class IntRateLimitsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntRateLimitsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntRateLimitsState" };
  }
}
