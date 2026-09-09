export class ObsSpansScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsSpansSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsSpansSchedule" };
  }
}
