export class InvPurchaseOrderItemCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for InvPurchaseOrderItem:" + entityId);
  }
}
