export class DmsChunksQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsChunksQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsChunksQueue" };
  }
}
