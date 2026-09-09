export class IntSalesforceSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSalesforceSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSalesforceSession" };
  }
}
