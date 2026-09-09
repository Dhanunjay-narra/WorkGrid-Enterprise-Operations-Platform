export class CommChannelsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommChannelsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommChannelsEvent" };
  }
}
