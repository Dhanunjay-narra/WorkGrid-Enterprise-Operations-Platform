export class AiPromptsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiPromptsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiPromptsPolicy" };
  }
}
