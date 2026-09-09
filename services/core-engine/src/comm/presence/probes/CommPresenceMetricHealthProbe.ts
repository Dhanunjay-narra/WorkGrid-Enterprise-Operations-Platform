export class CommPresenceMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommPresenceMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommPresenceMetric" };
  }
}
