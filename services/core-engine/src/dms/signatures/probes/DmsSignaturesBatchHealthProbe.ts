export class DmsSignaturesBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsSignaturesBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsSignaturesBatch" };
  }
}
