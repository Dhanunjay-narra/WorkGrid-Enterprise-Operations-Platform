export class ObsLoggingPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsLoggingPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsLoggingPayload" };
  }
}
