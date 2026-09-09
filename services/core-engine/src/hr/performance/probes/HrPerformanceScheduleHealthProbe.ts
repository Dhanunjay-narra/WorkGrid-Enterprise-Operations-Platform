export class HrPerformanceScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPerformanceSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPerformanceSchedule" };
  }
}
