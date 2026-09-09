export class ObsAlertsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsAlertsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsAlertsSchedule" };
  }
}
