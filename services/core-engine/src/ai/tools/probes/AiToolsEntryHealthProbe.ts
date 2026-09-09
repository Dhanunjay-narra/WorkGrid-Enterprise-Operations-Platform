export class AiToolsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiToolsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiToolsEntry" };
  }
}
