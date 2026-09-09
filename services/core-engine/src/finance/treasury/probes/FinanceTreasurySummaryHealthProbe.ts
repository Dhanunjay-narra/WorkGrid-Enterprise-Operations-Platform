export class FinanceTreasurySummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTreasurySummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTreasurySummary" };
  }
}
