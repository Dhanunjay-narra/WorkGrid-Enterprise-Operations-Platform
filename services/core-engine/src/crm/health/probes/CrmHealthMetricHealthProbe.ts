export class CrmHealthMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmHealthMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmHealthMetric" };
  }
}
