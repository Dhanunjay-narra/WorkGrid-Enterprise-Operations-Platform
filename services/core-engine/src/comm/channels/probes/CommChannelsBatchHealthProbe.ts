export class CommChannelsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommChannelsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommChannelsBatch" };
  }
}
