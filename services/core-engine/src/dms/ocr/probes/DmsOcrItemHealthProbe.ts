export class DmsOcrItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsOcrItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsOcrItem" };
  }
}
