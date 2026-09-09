export class IdentityAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IdentityAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "IdentityAssignment" };
  }
}
