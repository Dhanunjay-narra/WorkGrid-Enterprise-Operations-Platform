export class AiMemoryTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiMemoryTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiMemoryTransaction" };
  }
}
