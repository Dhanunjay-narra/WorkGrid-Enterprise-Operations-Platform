export class IotFirmwareVersionCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IotFirmwareVersion:" + entityId);
  }
}
