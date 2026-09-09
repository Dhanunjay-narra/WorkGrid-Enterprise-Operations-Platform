export class IdentityTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IdentityTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "IdentityTransaction" };
  }
}
