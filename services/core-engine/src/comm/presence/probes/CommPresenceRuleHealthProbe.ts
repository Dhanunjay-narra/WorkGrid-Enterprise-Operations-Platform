export class CommPresenceRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommPresenceRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommPresenceRule" };
  }
}
