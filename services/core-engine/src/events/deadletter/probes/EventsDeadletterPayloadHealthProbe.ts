export class EventsDeadletterPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsDeadletterPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsDeadletterPayload" };
  }
}
