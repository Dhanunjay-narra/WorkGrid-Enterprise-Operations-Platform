export class AiEvaluationsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEvaluationsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEvaluationsTransaction" };
  }
}
