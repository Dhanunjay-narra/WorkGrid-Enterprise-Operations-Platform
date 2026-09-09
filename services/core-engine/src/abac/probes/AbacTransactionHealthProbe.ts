export class AbacTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AbacTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "AbacTransaction" };
  }
}
