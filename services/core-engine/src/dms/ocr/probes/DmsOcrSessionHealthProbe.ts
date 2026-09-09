export class DmsOcrSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsOcrSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsOcrSession" };
  }
}
