export class IdGroupMembershipCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IdGroupMembership:" + entityId);
  }
}
