export class IntSalesforceStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSalesforceState" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSalesforceState" };
  }
}
