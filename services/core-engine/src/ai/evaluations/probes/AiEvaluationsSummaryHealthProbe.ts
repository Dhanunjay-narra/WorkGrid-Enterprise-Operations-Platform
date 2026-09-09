export class AiEvaluationsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEvaluationsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEvaluationsSummary" };
  }
}
