export class AiPromptsProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiPromptsProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiPromptsProfile" };
  }
}
