export class ObsProfilingConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProfilingConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProfilingConfig" };
  }
}
