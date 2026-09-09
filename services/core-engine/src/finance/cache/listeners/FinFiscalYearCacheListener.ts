export class FinFiscalYearCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for FinFiscalYear:" + entityId);
  }
}
