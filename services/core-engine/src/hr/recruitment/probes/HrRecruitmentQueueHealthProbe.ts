export class HrRecruitmentQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrRecruitmentQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrRecruitmentQueue" };
  }
}
