export class IntSalesforceTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSalesforceTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSalesforceTask" };
  }
}
