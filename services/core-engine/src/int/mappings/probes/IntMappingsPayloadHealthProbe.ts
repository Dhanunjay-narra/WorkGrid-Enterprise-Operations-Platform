export class IntMappingsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntMappingsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntMappingsPayload" };
  }
}
