export class IotDeviceCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IotDevice:" + entityId);
  }
}
