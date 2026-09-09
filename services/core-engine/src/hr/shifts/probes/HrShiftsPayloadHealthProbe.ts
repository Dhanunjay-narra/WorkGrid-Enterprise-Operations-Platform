export class HrShiftsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrShiftsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrShiftsPayload" };
  }
}
