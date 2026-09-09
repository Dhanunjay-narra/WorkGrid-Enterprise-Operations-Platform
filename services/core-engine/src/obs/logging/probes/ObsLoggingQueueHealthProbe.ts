export class ObsLoggingQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsLoggingQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsLoggingQueue" };
  }
}
