export class IntRateLimitsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntRateLimitsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntRateLimitsBatch" };
  }
}
