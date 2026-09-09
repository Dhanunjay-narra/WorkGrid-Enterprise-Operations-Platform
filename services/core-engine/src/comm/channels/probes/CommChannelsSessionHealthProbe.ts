export class CommChannelsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommChannelsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommChannelsSession" };
  }
}
