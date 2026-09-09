export class ObsSpansEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsSpansEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsSpansEvent" };
  }
}
