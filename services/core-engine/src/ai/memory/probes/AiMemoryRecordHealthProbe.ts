export class AiMemoryRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiMemoryRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiMemoryRecord" };
  }
}
