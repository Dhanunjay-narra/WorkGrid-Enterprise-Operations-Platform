export class FinRefundRecordCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for FinRefundRecord:" + entityId);
  }
}
