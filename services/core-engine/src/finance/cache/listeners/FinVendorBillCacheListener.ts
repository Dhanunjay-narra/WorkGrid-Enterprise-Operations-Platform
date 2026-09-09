export class FinVendorBillCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for FinVendorBill:" + entityId);
  }
}
