export class ObsSpansPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsSpansPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsSpansPayload" };
  }
}
