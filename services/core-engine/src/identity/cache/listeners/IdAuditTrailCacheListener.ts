export class IdAuditTrailCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IdAuditTrail:" + entityId);
  }
}
