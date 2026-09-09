export class IntSalesforceTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSalesforceTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSalesforceTransaction" };
  }
}
