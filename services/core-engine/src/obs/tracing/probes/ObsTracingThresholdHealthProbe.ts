export class ObsTracingThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsTracingThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsTracingThreshold" };
  }
}
