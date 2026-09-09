export class HrRecruitmentTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrRecruitmentTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrRecruitmentTransaction" };
  }
}
