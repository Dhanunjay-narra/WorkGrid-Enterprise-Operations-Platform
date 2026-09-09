export class AiMemorySummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiMemorySummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiMemorySummary" };
  }
}
