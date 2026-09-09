export class CommCallsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommCallsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommCallsQueue" };
  }
}
