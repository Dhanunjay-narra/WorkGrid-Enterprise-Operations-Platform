export class ObsProbesThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProbesThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProbesThreshold" };
  }
}
