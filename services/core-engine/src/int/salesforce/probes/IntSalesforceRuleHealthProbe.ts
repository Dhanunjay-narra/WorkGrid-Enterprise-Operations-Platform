export class IntSalesforceRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSalesforceRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSalesforceRule" };
  }
}
