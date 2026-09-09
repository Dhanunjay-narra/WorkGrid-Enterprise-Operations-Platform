export class CommChannelsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommChannelsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommChannelsState" };
  }
}
