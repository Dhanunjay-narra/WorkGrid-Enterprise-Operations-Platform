export class CrmCustomerHealthCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for CrmCustomerHealth:" + entityId);
  }
}
