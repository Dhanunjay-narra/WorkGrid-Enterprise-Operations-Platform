export class PrjReleasePlanCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for PrjReleasePlan:" + entityId);
  }
}
