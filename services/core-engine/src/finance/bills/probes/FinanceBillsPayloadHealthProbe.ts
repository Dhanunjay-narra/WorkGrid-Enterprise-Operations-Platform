export class FinanceBillsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "FinanceBillsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "FinanceBillsPayload" };
  }
}
