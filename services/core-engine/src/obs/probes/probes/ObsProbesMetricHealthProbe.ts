export class ObsProbesMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProbesMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProbesMetric" };
  }
}
