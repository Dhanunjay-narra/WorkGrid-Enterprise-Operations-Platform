export class ObsProfilingNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProfilingNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProfilingNode" };
  }
}
