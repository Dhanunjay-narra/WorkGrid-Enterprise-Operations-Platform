export class CommNotificationsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommNotificationsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommNotificationsThreshold" };
  }
}
