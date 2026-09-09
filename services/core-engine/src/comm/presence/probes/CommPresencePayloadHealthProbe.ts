export class CommPresencePayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommPresencePayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommPresencePayload" };
  }
}
