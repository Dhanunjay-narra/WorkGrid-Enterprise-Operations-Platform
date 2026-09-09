export class EvtIdempotencyRecordSubscriber {
  public static subscribeToStream(): void {
    console.log("[SUBSCRIBER] Listening to stream nexora.events.idempotencyrecord.events");
  }
}
