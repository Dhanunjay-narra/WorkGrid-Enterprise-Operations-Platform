export class CommNotificationsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommNotificationsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommNotificationsNode" };
  }
}
