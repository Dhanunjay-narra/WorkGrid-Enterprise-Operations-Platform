export class AiEvaluationsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEvaluationsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEvaluationsQueue" };
  }
}
