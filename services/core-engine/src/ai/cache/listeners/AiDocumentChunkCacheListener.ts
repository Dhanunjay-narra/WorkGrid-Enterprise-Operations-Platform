export class AiDocumentChunkCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for AiDocumentChunk:" + entityId);
  }
}
