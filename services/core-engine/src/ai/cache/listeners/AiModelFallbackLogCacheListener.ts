export class AiModelFallbackLogCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for AiModelFallbackLog:" + entityId);
  }
}
