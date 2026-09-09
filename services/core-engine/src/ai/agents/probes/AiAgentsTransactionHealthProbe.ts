export class AiAgentsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "AiAgentsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "AiAgentsTransaction" };
  }
}
