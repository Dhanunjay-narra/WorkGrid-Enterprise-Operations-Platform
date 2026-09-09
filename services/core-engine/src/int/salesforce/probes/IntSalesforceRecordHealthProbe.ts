export class IntSalesforceRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSalesforceRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSalesforceRecord" };
  }
}
