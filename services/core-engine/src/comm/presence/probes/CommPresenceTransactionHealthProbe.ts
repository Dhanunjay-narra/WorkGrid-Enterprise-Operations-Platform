export class CommPresenceTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommPresenceTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommPresenceTransaction" };
  }
}
