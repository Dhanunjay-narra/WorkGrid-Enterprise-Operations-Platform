export class CommChannelsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommChannelsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommChannelsTask" };
  }
}
