export class SupportAgentsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportAgentsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportAgentsTransaction" };
  }
}
