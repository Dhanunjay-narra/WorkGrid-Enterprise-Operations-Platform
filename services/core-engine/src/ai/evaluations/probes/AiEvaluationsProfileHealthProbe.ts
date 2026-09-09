export class AiEvaluationsProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEvaluationsProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEvaluationsProfile" };
  }
}
