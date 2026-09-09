export class FinFxRateHistoryCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for FinFxRateHistory:" + entityId);
  }
}
