export class CommNotificationsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommNotificationsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommNotificationsPolicy" };
  }
}
