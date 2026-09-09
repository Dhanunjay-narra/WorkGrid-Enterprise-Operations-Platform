export class CommChannelsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommChannelsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommChannelsMapping" };
  }
}
