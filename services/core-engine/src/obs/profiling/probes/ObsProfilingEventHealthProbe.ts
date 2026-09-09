export class ObsProfilingEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProfilingEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProfilingEvent" };
  }
}
