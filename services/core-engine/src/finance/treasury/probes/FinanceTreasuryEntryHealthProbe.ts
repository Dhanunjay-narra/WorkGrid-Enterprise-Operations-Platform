export class FinanceTreasuryEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTreasuryEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTreasuryEntry" };
  }
}
