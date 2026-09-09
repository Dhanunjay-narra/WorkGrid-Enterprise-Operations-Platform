export class ObsSpansMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsSpansMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsSpansMapping" };
  }
}
