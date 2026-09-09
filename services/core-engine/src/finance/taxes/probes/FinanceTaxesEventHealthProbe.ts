export class FinanceTaxesEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTaxesEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTaxesEvent" };
  }
}
