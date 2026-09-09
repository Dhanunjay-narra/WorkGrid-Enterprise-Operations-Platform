import { DocDocumentFileData, DocDocumentFileValidator } from "../../../../packages/types/src/domains/documents/DocDocumentFile";

export class DocDocumentFileService {
  private repository = new Map<string, DocDocumentFileData>();

  public create(data: Omit<DocDocumentFileData, "id" | "createdAt" | "updatedAt">): DocDocumentFileData {
    const id = "doc_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: DocDocumentFileData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = DocDocumentFileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DocDocumentFile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DocDocumentFileData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): DocDocumentFileData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<DocDocumentFileData>): DocDocumentFileData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DocDocumentFileData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
