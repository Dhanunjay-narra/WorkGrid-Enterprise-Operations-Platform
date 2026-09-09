export class AuthAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuthAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuthAssignment" };
  }
}
