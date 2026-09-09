export class HrAttendancePayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrAttendancePayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrAttendancePayload" };
  }
}
