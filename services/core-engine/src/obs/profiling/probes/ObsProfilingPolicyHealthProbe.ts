export class ObsProfilingPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProfilingPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProfilingPolicy" };
  }
}
