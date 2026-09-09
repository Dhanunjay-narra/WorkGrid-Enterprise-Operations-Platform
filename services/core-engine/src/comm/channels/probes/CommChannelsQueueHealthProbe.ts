export class CommChannelsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommChannelsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommChannelsQueue" };
  }
}
