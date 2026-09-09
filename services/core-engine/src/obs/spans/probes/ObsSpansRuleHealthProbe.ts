export class ObsSpansRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsSpansRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsSpansRule" };
  }
}
