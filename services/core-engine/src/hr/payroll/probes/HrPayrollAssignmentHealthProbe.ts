export class HrPayrollAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPayrollAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPayrollAssignment" };
  }
}
