export class IdentityPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IdentityPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "IdentityPolicy" };
  }
}
