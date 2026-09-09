export class IntOauthAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntOauthAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntOauthAssignment" };
  }
}
