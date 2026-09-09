export class AiEmbeddingsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiEmbeddingsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiEmbeddingsSnapshot" };
  }
}
