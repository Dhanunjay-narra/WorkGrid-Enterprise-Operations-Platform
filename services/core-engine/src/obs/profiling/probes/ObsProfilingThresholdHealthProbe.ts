export class ObsProfilingThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProfilingThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProfilingThreshold" };
  }
}
