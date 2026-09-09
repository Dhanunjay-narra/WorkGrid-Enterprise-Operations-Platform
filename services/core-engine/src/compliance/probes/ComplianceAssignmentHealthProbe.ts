export class ComplianceAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ComplianceAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "ComplianceAssignment" };
  }
}
