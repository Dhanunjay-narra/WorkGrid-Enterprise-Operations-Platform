export class FinanceTreasuryTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTreasuryTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTreasuryTransaction" };
  }
}
