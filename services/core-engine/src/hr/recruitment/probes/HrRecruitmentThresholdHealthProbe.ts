export class HrRecruitmentThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrRecruitmentThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrRecruitmentThreshold" };
  }
}
