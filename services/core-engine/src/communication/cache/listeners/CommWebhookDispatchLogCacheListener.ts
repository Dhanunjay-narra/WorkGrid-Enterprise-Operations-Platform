export class CommWebhookDispatchLogCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for CommWebhookDispatchLog:" + entityId);
  }
}
