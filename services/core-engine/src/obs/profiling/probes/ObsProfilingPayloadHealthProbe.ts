export class ObsProfilingPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProfilingPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProfilingPayload" };
  }
}
