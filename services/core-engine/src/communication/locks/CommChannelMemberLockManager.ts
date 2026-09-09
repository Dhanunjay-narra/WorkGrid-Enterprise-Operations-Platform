export class CommChannelMemberLockManager {
  private activeLocks = new Set<string>();

  public async acquireLock(resourceId: string, ttlMs: number = 5000): Promise<boolean> {
    const lockKey = "lock:communication:" + resourceId;
    if (this.activeLocks.has(lockKey)) return false;
    this.activeLocks.add(lockKey);
    setTimeout(() => this.activeLocks.delete(lockKey), ttlMs);
    return true;
  }

  public async releaseLock(resourceId: string): Promise<void> {
    this.activeLocks.delete("lock:communication:" + resourceId);
  }
}
