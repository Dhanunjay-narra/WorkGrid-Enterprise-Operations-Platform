export class CommDigestSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommDigestSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommDigestSnapshot" };
  }
}
