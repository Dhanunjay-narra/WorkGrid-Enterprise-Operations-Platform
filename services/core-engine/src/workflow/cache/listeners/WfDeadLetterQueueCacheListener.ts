export class WfDeadLetterQueueCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for WfDeadLetterQueue:" + entityId);
  }
}
