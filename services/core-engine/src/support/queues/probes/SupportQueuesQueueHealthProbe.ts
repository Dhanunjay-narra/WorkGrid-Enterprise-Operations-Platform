export class SupportQueuesQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportQueuesQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportQueuesQueue" };
  }
}
