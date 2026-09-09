export class HrRecruitmentNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrRecruitmentNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrRecruitmentNode" };
  }
}
