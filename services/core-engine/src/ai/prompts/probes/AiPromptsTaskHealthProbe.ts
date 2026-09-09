export class AiPromptsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiPromptsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiPromptsTask" };
  }
}
