export class InvSkuItemCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for InvSkuItem:" + entityId);
  }
}
