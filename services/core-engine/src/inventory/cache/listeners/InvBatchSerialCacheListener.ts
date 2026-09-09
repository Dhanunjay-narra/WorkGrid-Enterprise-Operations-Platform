export class InvBatchSerialCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for InvBatchSerial:" + entityId);
  }
}
