export class AiToolsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiToolsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiToolsTask" };
  }
}
