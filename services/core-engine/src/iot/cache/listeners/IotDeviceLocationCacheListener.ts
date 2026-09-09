export class IotDeviceLocationCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IotDeviceLocation:" + entityId);
  }
}
