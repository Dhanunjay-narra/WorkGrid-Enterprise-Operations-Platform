export class CommMentionRecordCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for CommMentionRecord:" + entityId);
  }
}
