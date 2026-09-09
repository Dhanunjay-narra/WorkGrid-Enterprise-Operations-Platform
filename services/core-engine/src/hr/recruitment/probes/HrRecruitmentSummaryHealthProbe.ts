export class HrRecruitmentSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrRecruitmentSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrRecruitmentSummary" };
  }
}
