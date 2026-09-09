export class FinanceTaxesPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTaxesPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTaxesPayload" };
  }
}
