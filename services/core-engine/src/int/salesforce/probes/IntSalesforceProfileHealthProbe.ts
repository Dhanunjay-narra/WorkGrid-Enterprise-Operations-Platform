export class IntSalesforceProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSalesforceProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSalesforceProfile" };
  }
}
