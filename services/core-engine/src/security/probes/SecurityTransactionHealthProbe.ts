export class SecurityTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SecurityTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "SecurityTransaction" };
  }
}
