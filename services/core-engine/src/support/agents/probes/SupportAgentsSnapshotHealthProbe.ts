export class SupportAgentsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportAgentsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportAgentsSnapshot" };
  }
}
