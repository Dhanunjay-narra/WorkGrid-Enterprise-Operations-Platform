export class FinCostCenterCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for FinCostCenter:" + entityId);
  }
}
