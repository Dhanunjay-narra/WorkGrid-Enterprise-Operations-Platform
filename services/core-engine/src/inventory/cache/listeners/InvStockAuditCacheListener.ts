export class InvStockAuditCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for InvStockAudit:" + entityId);
  }
}
