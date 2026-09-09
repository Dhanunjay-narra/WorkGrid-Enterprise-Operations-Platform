export class CommDigestTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommDigestTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommDigestTransaction" };
  }
}
