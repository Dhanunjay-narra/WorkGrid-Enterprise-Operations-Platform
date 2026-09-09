export class ObsLoggingScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsLoggingSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsLoggingSchedule" };
  }
}
