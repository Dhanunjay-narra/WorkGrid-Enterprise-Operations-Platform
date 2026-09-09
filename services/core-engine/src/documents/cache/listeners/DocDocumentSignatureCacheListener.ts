export class DocDocumentSignatureCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for DocDocumentSignature:" + entityId);
  }
}
