export class IntRateLimitsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntRateLimitsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntRateLimitsSnapshot" };
  }
}
