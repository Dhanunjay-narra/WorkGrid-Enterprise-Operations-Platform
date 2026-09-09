export class FinanceTaxesTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTaxesTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTaxesTransaction" };
  }
}
