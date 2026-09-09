export class FinanceBankingSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceBankingSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceBankingSession" };
  }
}
