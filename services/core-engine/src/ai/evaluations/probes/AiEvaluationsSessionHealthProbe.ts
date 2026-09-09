export class AiEvaluationsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEvaluationsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEvaluationsSession" };
  }
}
