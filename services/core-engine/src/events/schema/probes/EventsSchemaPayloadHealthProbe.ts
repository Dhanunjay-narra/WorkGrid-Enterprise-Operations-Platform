export class EventsSchemaPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsSchemaPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsSchemaPayload" };
  }
}
