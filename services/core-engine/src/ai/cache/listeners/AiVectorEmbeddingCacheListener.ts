export class AiVectorEmbeddingCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for AiVectorEmbedding:" + entityId);
  }
}
