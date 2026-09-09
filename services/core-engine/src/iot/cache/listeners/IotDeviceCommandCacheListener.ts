export class IotDeviceCommandCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IotDeviceCommand:" + entityId);
  }
}
