export class CommChatMessageCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for CommChatMessage:" + entityId);
  }
}
