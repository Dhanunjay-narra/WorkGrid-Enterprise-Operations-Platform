export class FinExpenseReceiptCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for FinExpenseReceipt:" + entityId);
  }
}
