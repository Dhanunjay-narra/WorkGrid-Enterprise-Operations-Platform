export class CommNotificationsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommNotificationsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommNotificationsEvent" };
  }
}
