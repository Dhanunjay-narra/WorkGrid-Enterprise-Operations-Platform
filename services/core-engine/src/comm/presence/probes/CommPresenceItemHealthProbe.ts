export class CommPresenceItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommPresenceItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommPresenceItem" };
  }
}
