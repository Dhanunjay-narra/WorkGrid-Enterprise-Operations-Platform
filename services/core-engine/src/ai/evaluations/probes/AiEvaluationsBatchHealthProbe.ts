export class AiEvaluationsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEvaluationsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEvaluationsBatch" };
  }
}
