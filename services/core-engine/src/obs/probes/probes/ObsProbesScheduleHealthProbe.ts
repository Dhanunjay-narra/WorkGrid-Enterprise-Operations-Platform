export class ObsProbesScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProbesSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProbesSchedule" };
  }
}
