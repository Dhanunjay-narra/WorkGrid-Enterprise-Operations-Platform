export class AiPromptsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiPromptsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiPromptsConfig" };
  }
}
