export class DocAccessLogCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for DocAccessLog:" + entityId);
  }
}
