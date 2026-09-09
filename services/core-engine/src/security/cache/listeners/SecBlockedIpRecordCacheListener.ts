export class SecBlockedIpRecordCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for SecBlockedIpRecord:" + entityId);
  }
}
