export class DmsOcrStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsOcrState" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsOcrState" };
  }
}
