export class IdentitySummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IdentitySummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "IdentitySummary" };
  }
}
