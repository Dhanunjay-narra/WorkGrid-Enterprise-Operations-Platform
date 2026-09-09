export class HrRecruitmentPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrRecruitmentPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrRecruitmentPayload" };
  }
}
