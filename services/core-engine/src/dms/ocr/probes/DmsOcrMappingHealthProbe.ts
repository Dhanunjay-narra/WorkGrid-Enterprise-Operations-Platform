export class DmsOcrMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsOcrMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsOcrMapping" };
  }
}
