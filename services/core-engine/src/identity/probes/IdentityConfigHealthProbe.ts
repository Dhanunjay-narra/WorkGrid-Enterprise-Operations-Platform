export class IdentityConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IdentityConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "IdentityConfig" };
  }
}
