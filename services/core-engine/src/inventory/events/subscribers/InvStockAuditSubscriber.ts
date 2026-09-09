export class InvStockAuditSubscriber {
  public static subscribeToStream(): void {
    console.log("[SUBSCRIBER] Listening to stream nexora.inventory.stockaudit.events");
  }
}
