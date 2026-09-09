export class HrLeaveScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrLeaveSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrLeaveSchedule" };
  }
}
