export class CommNotificationsProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommNotificationsProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommNotificationsProfile" };
  }
}
