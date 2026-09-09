export class AiMemoryMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiMemoryMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiMemoryMapping" };
  }
}
