export class IotDeviceGroupCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IotDeviceGroup:" + entityId);
  }
}
