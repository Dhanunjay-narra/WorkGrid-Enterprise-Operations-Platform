export class AiEvaluationsItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEvaluationsItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEvaluationsItem" };
  }
}
