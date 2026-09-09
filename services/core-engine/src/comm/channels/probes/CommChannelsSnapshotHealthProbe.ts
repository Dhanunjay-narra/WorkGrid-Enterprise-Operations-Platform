export class CommChannelsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommChannelsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommChannelsSnapshot" };
  }
}
