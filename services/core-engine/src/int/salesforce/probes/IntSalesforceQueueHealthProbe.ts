export class IntSalesforceQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSalesforceQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSalesforceQueue" };
  }
}
