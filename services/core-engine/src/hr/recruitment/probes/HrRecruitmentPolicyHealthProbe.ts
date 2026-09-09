export class HrRecruitmentPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrRecruitmentPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrRecruitmentPolicy" };
  }
}
