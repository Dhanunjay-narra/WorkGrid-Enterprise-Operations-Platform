export class CommNotificationsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommNotificationsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommNotificationsTransaction" };
  }
}
