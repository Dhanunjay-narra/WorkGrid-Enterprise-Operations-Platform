import { DocStorageBucketData, DocStorageBucketValidator } from "../../../../packages/types/src/domains/documents/DocStorageBucket";

export class DocStorageBucketService {
  private repository = new Map<string, DocStorageBucketData>();

  public create(data: Omit<DocStorageBucketData, "id" | "createdAt" | "updatedAt">): DocStorageBucketData {
    const id = "doc_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: DocStorageBucketData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = DocStorageBucketValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DocStorageBucket: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DocStorageBucketData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): DocStorageBucketData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<DocStorageBucketData>): DocStorageBucketData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DocStorageBucketData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
