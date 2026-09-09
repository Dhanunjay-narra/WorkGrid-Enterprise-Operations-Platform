export class ObsMetricsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsMetricsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsMetricsNode" };
  }
}
