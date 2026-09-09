export class DocChunkIndexCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for DocChunkIndex:" + entityId);
  }
}
