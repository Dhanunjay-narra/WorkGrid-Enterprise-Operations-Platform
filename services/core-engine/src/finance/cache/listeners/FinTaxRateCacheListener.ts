export class FinTaxRateCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for FinTaxRate:" + entityId);
  }
}
