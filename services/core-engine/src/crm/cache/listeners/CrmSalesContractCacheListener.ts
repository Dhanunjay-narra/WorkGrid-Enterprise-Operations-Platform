export class CrmSalesContractCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for CrmSalesContract:" + entityId);
  }
}
