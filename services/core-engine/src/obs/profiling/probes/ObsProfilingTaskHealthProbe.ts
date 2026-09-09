export class ObsProfilingTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProfilingTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProfilingTask" };
  }
}
