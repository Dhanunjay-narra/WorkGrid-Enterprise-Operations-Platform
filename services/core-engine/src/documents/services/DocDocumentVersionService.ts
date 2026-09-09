import { DocDocumentVersionData, DocDocumentVersionValidator } from "../../../../packages/types/src/domains/documents/DocDocumentVersion";

export class DocDocumentVersionService {
  private repository = new Map<string, DocDocumentVersionData>();

  public create(data: Omit<DocDocumentVersionData, "id" | "createdAt" | "updatedAt">): DocDocumentVersionData {
    const id = "doc_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: DocDocumentVersionData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = DocDocumentVersionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DocDocumentVersion: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DocDocumentVersionData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): DocDocumentVersionData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<DocDocumentVersionData>): DocDocumentVersionData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DocDocumentVersionData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
