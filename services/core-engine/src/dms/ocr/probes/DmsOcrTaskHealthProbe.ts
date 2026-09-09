export class DmsOcrTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsOcrTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsOcrTask" };
  }
}
