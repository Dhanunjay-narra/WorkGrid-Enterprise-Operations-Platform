export class FinanceTreasuryPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceTreasuryPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceTreasuryPayload" };
  }
}
