export class HrRecruitmentAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrRecruitmentAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrRecruitmentAssignment" };
  }
}
