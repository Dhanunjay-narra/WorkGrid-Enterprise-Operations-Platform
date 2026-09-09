export class HrRecruitmentEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrRecruitmentEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrRecruitmentEvent" };
  }
}
