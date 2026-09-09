export class AiPromptsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiPromptsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiPromptsQueue" };
  }
}
