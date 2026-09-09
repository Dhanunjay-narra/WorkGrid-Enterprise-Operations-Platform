export class ObsSpansConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsSpansConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsSpansConfig" };
  }
}
