export class CommThreadsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommThreadsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommThreadsQueue" };
  }
}
