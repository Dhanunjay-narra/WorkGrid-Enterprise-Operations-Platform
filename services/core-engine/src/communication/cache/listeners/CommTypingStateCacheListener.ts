export class CommTypingStateCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for CommTypingState:" + entityId);
  }
}
