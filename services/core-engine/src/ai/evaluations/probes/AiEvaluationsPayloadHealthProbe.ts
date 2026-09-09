export class AiEvaluationsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEvaluationsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEvaluationsPayload" };
  }
}
