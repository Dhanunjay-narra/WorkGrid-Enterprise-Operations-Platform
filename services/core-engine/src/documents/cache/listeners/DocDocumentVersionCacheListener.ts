export class DocDocumentVersionCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for DocDocumentVersion:" + entityId);
  }
}
