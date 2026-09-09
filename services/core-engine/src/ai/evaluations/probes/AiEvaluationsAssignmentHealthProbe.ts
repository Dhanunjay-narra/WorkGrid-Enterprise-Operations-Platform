export class AiEvaluationsAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEvaluationsAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEvaluationsAssignment" };
  }
}
