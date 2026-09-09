export class FinLedgerAccountCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for FinLedgerAccount:" + entityId);
  }
}
