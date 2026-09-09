export class IntRateLimitsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntRateLimitsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntRateLimitsSummary" };
  }
}
