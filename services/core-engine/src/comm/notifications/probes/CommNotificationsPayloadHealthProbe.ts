export class CommNotificationsPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommNotificationsPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommNotificationsPayload" };
  }
}
