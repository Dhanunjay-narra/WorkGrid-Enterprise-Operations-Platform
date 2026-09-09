export class EvtIdempotencyRecordCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for EvtIdempotencyRecord:" + entityId);
  }
}
