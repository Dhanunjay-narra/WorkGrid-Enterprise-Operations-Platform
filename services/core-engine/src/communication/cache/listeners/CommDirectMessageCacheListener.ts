export class CommDirectMessageCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for CommDirectMessage:" + entityId);
  }
}
