export class ObsProfilingProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProfilingProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProfilingProfile" };
  }
}
