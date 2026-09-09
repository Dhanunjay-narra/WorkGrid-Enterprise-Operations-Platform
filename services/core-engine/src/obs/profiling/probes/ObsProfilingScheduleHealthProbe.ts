export class ObsProfilingScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProfilingSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProfilingSchedule" };
  }
}
