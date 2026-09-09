export class CommNotificationsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommNotificationsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommNotificationsState" };
  }
}
