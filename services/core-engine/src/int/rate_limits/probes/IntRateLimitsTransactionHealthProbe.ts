export class IntRateLimitsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntRateLimitsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntRateLimitsTransaction" };
  }
}
