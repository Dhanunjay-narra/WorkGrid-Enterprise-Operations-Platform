export class InvStockMovementCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for InvStockMovement:" + entityId);
  }
}
