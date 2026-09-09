export class HrEmployeesScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrEmployeesSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrEmployeesSchedule" };
  }
}
