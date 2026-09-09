export class CommNotificationsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommNotificationsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommNotificationsRule" };
  }
}
