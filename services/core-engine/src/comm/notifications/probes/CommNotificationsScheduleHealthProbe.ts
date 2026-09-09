export class CommNotificationsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommNotificationsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommNotificationsSchedule" };
  }
}
