export class FinanceTreasurySessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTreasurySession" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTreasurySession" };
  }
}
