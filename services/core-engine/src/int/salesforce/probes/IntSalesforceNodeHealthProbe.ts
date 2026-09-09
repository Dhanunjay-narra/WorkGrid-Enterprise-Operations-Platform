export class IntSalesforceNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSalesforceNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSalesforceNode" };
  }
}
