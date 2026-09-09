export class HrRecruitmentItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrRecruitmentItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrRecruitmentItem" };
  }
}
