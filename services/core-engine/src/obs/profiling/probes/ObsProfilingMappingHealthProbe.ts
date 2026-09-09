export class ObsProfilingMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProfilingMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProfilingMapping" };
  }
}
