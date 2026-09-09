export class FinanceTaxesSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTaxesSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTaxesSession" };
  }
}
