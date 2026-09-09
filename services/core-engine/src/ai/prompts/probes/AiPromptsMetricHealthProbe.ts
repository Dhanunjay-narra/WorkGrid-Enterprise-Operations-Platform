export class AiPromptsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiPromptsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiPromptsMetric" };
  }
}
