export class FinBankReconciliationCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for FinBankReconciliation:" + entityId);
  }
}
