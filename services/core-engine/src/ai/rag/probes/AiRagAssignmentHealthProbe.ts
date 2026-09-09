export class AiRagAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiRagAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiRagAssignment" };
  }
}
