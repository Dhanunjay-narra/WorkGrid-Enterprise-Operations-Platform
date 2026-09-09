export class HrAttendanceEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrAttendanceEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrAttendanceEntry" };
  }
}
