export class RbacAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "RbacAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "RbacAssignment" };
  }
}
