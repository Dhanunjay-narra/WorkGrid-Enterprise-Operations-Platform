export class PrjBudgetLineCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for PrjBudgetLine:" + entityId);
  }
}
