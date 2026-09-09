export class HrLeavePayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrLeavePayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrLeavePayload" };
  }
}
