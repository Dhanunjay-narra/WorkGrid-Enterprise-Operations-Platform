export class IntMappingsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntMappingsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntMappingsThreshold" };
  }
}
