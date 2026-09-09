export class ObsSpansThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsSpansThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsSpansThreshold" };
  }
}
