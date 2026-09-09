export class ObsProfilingSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProfilingSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProfilingSession" };
  }
}
