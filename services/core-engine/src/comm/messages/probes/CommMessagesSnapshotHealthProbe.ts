export class CommMessagesSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommMessagesSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommMessagesSnapshot" };
  }
}
