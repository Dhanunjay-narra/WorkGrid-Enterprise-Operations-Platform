export class SupportAgentsAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportAgentsAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportAgentsAssignment" };
  }
}
