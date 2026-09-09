export class SupportQueuesTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportQueuesTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportQueuesTransaction" };
  }
}
