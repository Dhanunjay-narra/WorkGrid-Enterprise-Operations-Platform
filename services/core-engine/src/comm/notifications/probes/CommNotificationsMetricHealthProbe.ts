export class CommNotificationsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommNotificationsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommNotificationsMetric" };
  }
}
