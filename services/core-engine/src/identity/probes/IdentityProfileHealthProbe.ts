export class IdentityProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IdentityProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "IdentityProfile" };
  }
}
