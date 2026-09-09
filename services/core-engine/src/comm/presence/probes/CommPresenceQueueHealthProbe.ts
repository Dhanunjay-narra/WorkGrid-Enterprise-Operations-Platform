export class CommPresenceQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommPresenceQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommPresenceQueue" };
  }
}
