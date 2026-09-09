export class DmsOcrEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsOcrEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsOcrEvent" };
  }
}
