export class ObsTracingPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsTracingPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsTracingPayload" };
  }
}
