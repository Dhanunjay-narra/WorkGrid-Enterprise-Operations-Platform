export class CommNotificationPreferenceCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for CommNotificationPreference:" + entityId);
  }
}
