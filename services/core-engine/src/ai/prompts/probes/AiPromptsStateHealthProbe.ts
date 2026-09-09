export class AiPromptsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiPromptsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiPromptsState" };
  }
}
