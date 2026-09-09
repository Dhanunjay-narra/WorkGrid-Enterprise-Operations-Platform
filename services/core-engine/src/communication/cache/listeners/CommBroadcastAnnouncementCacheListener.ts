export class CommBroadcastAnnouncementCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for CommBroadcastAnnouncement:" + entityId);
  }
}
