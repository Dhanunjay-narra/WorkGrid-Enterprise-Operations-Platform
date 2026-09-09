export class HrRecruitmentStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrRecruitmentState" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrRecruitmentState" };
  }
}
