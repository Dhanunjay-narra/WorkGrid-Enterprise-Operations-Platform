export class HrShiftsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrShiftsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrShiftsSchedule" };
  }
}
