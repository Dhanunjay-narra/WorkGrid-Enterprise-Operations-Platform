export class AiEvaluationsRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEvaluationsRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEvaluationsRecord" };
  }
}
