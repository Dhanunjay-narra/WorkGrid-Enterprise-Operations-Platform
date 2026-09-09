export class CommNotificationsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommNotificationsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommNotificationsTask" };
  }
}
