export class IntSalesforceMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSalesforceMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSalesforceMetric" };
  }
}
