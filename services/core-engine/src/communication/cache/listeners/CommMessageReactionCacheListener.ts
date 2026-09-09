export class CommMessageReactionCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for CommMessageReaction:" + entityId);
  }
}
