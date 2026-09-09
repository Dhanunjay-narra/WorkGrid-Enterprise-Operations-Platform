export class AiAgentsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiAgentsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiAgentsSnapshot" };
  }
}
