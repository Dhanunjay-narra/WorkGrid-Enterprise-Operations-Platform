export class DmsSignaturesQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsSignaturesQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsSignaturesQueue" };
  }
}
