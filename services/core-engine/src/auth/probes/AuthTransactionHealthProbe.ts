export class AuthTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AuthTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "AuthTransaction" };
  }
}
