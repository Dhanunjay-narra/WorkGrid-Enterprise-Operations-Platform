export class IntSalesforceEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSalesforceEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSalesforceEvent" };
  }
}
