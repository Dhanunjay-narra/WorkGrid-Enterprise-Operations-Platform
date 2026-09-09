export class CommChannelsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommChannelsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommChannelsPayload" };
  }
}
