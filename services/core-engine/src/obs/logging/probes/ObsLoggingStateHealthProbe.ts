export class ObsLoggingStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsLoggingState" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsLoggingState" };
  }
}
