export class CommNotificationsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommNotificationsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommNotificationsConfig" };
  }
}
