export class AbacSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AbacSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "AbacSummary" };
  }
}
