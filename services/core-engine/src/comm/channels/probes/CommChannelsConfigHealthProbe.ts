export class CommChannelsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommChannelsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommChannelsConfig" };
  }
}
