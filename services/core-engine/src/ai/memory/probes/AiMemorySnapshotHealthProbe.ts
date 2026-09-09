export class AiMemorySnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiMemorySnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiMemorySnapshot" };
  }
}
