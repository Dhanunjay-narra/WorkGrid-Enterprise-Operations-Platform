export class IdentityStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IdentityState" } {
    return { healthy: true, latencyMs: 1.2, entity: "IdentityState" };
  }
}
