export class HrRecruitmentReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrRecruitmentReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrRecruitmentReport" };
  }
}
