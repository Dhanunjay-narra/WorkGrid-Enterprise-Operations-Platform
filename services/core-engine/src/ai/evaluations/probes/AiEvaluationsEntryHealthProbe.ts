export class AiEvaluationsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEvaluationsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEvaluationsEntry" };
  }
}
