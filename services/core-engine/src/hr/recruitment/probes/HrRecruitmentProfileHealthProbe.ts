export class HrRecruitmentProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrRecruitmentProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrRecruitmentProfile" };
  }
}
