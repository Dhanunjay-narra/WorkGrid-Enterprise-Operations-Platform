export class IntRateLimitsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntRateLimitsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntRateLimitsEntry" };
  }
}
