export class CrmSalesQuotaCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for CrmSalesQuota:" + entityId);
  }
}
