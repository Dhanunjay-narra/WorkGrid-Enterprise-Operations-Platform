export class InvWarehouseCacheRepository {
  private cache = new Map<string, { data: any; expires: number }>();

  public async get(id: string): Promise<any | null> {
    const entry = this.cache.get(id);
    if (!entry || entry.expires < Date.now()) return null;
    return entry.data;
  }

  public async set(id: string, data: any, ttlSeconds: number = 300): Promise<void> {
    this.cache.set(id, { data, expires: Date.now() + ttlSeconds * 1000 });
  }

  public async invalidate(id: string): Promise<void> {
    this.cache.delete(id);
  }
}
