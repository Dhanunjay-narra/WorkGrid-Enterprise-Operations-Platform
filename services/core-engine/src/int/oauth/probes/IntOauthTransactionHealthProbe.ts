export class IntOauthTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntOauthTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntOauthTransaction" };
  }
}
