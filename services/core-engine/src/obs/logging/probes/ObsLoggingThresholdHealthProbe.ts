export class ObsLoggingThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsLoggingThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsLoggingThreshold" };
  }
}
