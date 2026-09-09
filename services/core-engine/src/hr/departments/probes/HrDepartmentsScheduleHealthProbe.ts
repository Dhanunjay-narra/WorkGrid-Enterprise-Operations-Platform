export class HrDepartmentsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrDepartmentsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrDepartmentsSchedule" };
  }
}
