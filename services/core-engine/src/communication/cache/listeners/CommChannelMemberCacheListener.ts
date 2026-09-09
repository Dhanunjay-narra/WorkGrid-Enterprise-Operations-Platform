export class CommChannelMemberCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for CommChannelMember:" + entityId);
  }
}
