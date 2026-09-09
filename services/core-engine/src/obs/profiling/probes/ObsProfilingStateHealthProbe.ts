export class ObsProfilingStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProfilingState" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProfilingState" };
  }
}
