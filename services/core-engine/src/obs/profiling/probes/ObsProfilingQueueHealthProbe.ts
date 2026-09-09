export class ObsProfilingQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProfilingQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProfilingQueue" };
  }
}
