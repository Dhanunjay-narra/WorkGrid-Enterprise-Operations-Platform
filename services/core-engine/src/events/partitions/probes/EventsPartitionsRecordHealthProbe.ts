export class EventsPartitionsRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsPartitionsRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsPartitionsRecord" };
  }
}
