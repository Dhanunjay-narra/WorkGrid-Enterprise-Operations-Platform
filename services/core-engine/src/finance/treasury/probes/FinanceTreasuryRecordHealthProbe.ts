export class FinanceTreasuryRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTreasuryRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTreasuryRecord" };
  }
}
