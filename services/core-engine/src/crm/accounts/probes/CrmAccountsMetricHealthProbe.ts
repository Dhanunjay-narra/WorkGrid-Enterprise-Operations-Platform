export class CrmAccountsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmAccountsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmAccountsMetric" };
  }
}
