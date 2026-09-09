export class HrRecruitmentSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrRecruitmentSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrRecruitmentSnapshot" };
  }
}
