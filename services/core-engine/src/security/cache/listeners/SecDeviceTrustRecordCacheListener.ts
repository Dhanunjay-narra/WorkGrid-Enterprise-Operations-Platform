export class SecDeviceTrustRecordCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for SecDeviceTrustRecord:" + entityId);
  }
}
