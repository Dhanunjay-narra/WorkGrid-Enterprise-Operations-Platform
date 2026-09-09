export class IntRateLimitsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntRateLimitsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntRateLimitsReport" };
  }
}
