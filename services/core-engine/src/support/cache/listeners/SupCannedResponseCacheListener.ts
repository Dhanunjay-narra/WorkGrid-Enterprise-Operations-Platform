export class SupCannedResponseCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for SupCannedResponse:" + entityId);
  }
}
