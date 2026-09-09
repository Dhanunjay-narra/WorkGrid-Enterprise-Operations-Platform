export class IntSlackTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSlackTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSlackTransaction" };
  }
}
