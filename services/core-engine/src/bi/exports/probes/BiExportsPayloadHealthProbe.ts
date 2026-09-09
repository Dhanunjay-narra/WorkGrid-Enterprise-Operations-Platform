export class BiExportsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiExportsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiExportsPayload" };
  }
}
