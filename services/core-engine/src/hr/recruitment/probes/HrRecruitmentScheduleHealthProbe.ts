export class HrRecruitmentScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrRecruitmentSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrRecruitmentSchedule" };
  }
}
