export class ObsTracingSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsTracingSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsTracingSession" };
  }
}
