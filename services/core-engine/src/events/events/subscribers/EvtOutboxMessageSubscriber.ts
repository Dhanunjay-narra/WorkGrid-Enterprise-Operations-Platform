export class EvtOutboxMessageSubscriber {
  public static subscribeToStream(): void {
    console.log("[SUBSCRIBER] Listening to stream nexora.events.outboxmessage.events");
  }
}
