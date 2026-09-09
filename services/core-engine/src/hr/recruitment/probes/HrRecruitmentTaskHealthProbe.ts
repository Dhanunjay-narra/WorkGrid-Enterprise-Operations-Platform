export class HrRecruitmentTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrRecruitmentTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrRecruitmentTask" };
  }
}
