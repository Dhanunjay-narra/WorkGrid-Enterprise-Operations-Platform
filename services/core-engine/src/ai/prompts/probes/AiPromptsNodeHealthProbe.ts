export class AiPromptsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiPromptsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiPromptsNode" };
  }
}
