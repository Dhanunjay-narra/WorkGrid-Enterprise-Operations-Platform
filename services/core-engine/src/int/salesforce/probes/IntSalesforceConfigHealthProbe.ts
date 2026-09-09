export class IntSalesforceConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSalesforceConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSalesforceConfig" };
  }
}
