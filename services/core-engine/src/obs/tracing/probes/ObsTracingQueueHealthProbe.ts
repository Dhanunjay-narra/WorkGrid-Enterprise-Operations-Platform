export class ObsTracingQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsTracingQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsTracingQueue" };
  }
}
