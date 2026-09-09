export class HrRecruitmentRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrRecruitmentRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrRecruitmentRecord" };
  }
}
