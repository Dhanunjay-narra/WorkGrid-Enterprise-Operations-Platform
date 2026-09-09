export class DocAccessLogSubscriber {
  public static subscribeToStream(): void {
    console.log("[SUBSCRIBER] Listening to stream nexora.documents.accesslog.events");
  }
}
