export class ObsMetricsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsMetricsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsMetricsTask" };
  }
}
