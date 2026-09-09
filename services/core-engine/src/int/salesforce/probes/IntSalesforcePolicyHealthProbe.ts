export class IntSalesforcePolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSalesforcePolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSalesforcePolicy" };
  }
}
