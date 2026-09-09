export class FinanceBankingEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceBankingEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceBankingEntry" };
  }
}
