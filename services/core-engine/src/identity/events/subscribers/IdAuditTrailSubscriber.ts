export class IdAuditTrailSubscriber {
  public static subscribeToStream(): void {
    console.log("[SUBSCRIBER] Listening to stream nexora.identity.audittrail.events");
  }
}
