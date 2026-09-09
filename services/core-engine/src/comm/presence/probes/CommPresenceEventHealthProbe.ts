export class CommPresenceEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommPresenceEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommPresenceEvent" };
  }
}
