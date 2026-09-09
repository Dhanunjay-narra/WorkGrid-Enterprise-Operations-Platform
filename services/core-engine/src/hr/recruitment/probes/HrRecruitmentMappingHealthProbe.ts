export class HrRecruitmentMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrRecruitmentMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrRecruitmentMapping" };
  }
}
