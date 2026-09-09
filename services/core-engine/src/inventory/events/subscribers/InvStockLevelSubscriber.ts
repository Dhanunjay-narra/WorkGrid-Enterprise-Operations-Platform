export class InvStockLevelSubscriber {
  public static subscribeToStream(): void {
    console.log("[SUBSCRIBER] Listening to stream nexora.inventory.stocklevel.events");
  }
}
