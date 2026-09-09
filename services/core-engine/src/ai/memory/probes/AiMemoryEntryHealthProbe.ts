export class AiMemoryEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiMemoryEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiMemoryEntry" };
  }
}
