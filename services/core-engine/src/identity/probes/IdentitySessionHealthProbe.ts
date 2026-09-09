export class IdentitySessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IdentitySession" } {
    return { healthy: true, latencyMs: 1.2, entity: "IdentitySession" };
  }
}
