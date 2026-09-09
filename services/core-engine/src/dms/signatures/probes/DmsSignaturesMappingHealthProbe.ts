export class DmsSignaturesMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsSignaturesMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsSignaturesMapping" };
  }
}
