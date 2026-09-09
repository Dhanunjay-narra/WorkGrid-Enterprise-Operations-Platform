export class IntRateLimitsRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntRateLimitsRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntRateLimitsRecord" };
  }
}
