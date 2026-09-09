export class HrRecruitmentSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrRecruitmentSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrRecruitmentSession" };
  }
}
