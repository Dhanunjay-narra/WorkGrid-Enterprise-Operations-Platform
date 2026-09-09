export class ObsAlertsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsAlertsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsAlertsPayload" };
  }
}
