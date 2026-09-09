export class IotTelemetryPacketCacheListener {
  public onEntityModified(entityId: string): void {
    console.log("[CACHE-INVALIDATE] Invalidated redis cache key for IotTelemetryPacket:" + entityId);
  }
}
