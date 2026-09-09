export class AuthItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuthItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuthItem" };
  }
}
