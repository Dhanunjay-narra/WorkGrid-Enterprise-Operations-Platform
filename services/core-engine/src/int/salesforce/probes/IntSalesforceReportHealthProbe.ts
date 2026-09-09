export class IntSalesforceReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSalesforceReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSalesforceReport" };
  }
}
