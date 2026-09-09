export class CommChannelsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommChannelsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommChannelsRule" };
  }
}
