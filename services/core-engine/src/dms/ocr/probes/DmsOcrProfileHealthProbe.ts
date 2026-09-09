export class DmsOcrProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsOcrProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsOcrProfile" };
  }
}
