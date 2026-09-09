import { DocChunkIndexData, DocChunkIndexValidator } from "../../../../packages/types/src/domains/documents/DocChunkIndex";

export class DocChunkIndexService {
  private repository = new Map<string, DocChunkIndexData>();

  public create(data: Omit<DocChunkIndexData, "id" | "createdAt" | "updatedAt">): DocChunkIndexData {
    const id = "doc_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: DocChunkIndexData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = DocChunkIndexValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DocChunkIndex: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DocChunkIndexData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): DocChunkIndexData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<DocChunkIndexData>): DocChunkIndexData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DocChunkIndexData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
