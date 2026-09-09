export class FinanceTaxesEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTaxesEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTaxesEntry" };
  }
}
