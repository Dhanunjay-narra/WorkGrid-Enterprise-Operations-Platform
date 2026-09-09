export class CommNotificationsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommNotificationsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommNotificationsReport" };
  }
}
