export class PrjRiskItemCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for PrjRiskItem:" + entityId);
  }
}
