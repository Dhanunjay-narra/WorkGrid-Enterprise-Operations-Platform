export class InvStockLevelCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for InvStockLevel:" + entityId);
  }
}
