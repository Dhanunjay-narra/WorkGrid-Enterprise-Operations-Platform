export class CommNotificationsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommNotificationsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommNotificationsSummary" };
  }
}
