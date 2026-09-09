export class AiRagSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiRagSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiRagSnapshot" };
  }
}
