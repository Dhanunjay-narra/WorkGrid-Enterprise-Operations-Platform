export class CommMessagesRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommMessagesRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommMessagesRule" };
  }
}
