export class AiToolsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiToolsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiToolsQueue" };
  }
}
