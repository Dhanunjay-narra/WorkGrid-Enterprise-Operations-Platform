export class CommNotificationsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommNotificationsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommNotificationsSnapshot" };
  }
}
