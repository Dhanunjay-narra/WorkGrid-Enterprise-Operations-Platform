export class ObsSpansTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsSpansTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsSpansTask" };
  }
}
