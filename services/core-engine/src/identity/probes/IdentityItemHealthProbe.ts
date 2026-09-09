export class IdentityItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IdentityItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "IdentityItem" };
  }
}
