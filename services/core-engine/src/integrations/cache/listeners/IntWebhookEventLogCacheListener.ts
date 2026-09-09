export class IntWebhookEventLogCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IntWebhookEventLog:" + entityId);
  }
}
