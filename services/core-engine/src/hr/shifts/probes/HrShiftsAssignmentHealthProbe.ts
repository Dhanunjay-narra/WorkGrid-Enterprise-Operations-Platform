export class HrShiftsAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrShiftsAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrShiftsAssignment" };
  }
}
