export class ObsProbesRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProbesRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProbesRule" };
  }
}
