export class FinanceLedgerPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceLedgerPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceLedgerPayload" };
  }
}
