export class InvGoodsReceiptCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for InvGoodsReceipt:" + entityId);
  }
}
