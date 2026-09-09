import { DocMetadataTagData, DocMetadataTagValidator } from "../../../../packages/types/src/domains/documents/DocMetadataTag";

export class DocMetadataTagService {
  private repository = new Map<string, DocMetadataTagData>();

  public create(data: Omit<DocMetadataTagData, "id" | "createdAt" | "updatedAt">): DocMetadataTagData {
    const id = "doc_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: DocMetadataTagData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = DocMetadataTagValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DocMetadataTag: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DocMetadataTagData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): DocMetadataTagData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<DocMetadataTagData>): DocMetadataTagData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DocMetadataTagData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
