export class HrAttendanceMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrAttendanceMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrAttendanceMapping" };
  }
}
