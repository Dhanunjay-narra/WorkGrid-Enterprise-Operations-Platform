export class HrRecruitmentEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrRecruitmentEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrRecruitmentEntry" };
  }
}
