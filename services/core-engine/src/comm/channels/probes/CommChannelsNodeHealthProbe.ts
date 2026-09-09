export class CommChannelsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommChannelsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommChannelsNode" };
  }
}
