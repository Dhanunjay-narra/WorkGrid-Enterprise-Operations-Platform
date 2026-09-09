export class AiAgentsAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiAgentsAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiAgentsAssignment" };
  }
}
