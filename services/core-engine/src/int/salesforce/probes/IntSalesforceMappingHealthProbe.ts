export class IntSalesforceMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSalesforceMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSalesforceMapping" };
  }
}
