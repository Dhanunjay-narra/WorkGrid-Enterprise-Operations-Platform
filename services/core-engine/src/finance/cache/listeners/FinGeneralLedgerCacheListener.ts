export class FinGeneralLedgerCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for FinGeneralLedger:" + entityId);
  }
}
