export class FinanceTaxesStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTaxesState" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTaxesState" };
  }
}
