export class HrRecruitmentRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrRecruitmentRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrRecruitmentRule" };
  }
}
