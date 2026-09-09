export class DocDocumentFileCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for DocDocumentFile:" + entityId);
  }
}
