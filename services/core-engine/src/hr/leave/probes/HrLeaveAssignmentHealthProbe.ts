export class HrLeaveAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrLeaveAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrLeaveAssignment" };
  }
}
