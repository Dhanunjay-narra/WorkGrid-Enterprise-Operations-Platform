export class EvtDeadLetterEventSubscriber {
  public static subscribeToStream(): void {
    console.log("[SUBSCRIBER] Listening to stream nexora.events.deadletterevent.events");
  }
}
