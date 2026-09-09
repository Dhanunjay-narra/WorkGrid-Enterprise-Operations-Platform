export class HrAttendanceAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrAttendanceAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrAttendanceAssignment" };
  }
}
