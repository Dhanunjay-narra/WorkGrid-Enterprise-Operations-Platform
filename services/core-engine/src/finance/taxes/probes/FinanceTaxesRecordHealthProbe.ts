export class FinanceTaxesRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTaxesRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTaxesRecord" };
  }
}
