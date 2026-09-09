export class CommNotificationsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommNotificationsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommNotificationsQueue" };
  }
}
