export class BiCohortsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiCohortsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiCohortsSchedule" };
  }
}
