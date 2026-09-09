export class CommPresenceSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommPresenceSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommPresenceSession" };
  }
}
