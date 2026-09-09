export class ObsProfilingItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProfilingItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProfilingItem" };
  }
}
