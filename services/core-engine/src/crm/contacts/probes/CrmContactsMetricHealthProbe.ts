export class CrmContactsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmContactsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmContactsMetric" };
  }
}
