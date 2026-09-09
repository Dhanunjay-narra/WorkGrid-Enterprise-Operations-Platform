export class HrPayrollScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPayrollSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPayrollSchedule" };
  }
}
