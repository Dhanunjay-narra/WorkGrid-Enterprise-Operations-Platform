export class IntMappingsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntMappingsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntMappingsMetric" };
  }
}
