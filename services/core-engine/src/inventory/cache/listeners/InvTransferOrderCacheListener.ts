export class InvTransferOrderCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for InvTransferOrder:" + entityId);
  }
}
