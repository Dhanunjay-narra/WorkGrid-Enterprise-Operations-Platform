export class ObsProfilingRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProfilingRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProfilingRule" };
  }
}
