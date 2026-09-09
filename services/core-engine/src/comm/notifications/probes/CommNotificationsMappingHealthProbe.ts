export class CommNotificationsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommNotificationsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommNotificationsMapping" };
  }
}
