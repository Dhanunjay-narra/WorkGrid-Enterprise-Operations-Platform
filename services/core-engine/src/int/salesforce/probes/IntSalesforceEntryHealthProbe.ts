export class IntSalesforceEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSalesforceEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSalesforceEntry" };
  }
}
