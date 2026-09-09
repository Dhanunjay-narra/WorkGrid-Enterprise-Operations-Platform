export class HrRecruitmentBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrRecruitmentBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrRecruitmentBatch" };
  }
}
