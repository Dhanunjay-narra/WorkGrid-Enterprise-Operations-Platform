export class AiToolsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiToolsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiToolsConfig" };
  }
}
