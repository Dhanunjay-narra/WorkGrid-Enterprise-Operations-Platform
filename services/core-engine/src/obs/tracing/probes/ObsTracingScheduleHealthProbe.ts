export class ObsTracingScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsTracingSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsTracingSchedule" };
  }
}
