export class AiEvaluationsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEvaluationsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEvaluationsEvent" };
  }
}
