import { DocTemplateDocumentData, DocTemplateDocumentValidator } from "../../../../packages/types/src/domains/documents/DocTemplateDocument";

export class DocTemplateDocumentService {
  private repository = new Map<string, DocTemplateDocumentData>();

  public create(data: Omit<DocTemplateDocumentData, "id" | "createdAt" | "updatedAt">): DocTemplateDocumentData {
    const id = "doc_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: DocTemplateDocumentData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = DocTemplateDocumentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DocTemplateDocument: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DocTemplateDocumentData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): DocTemplateDocumentData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<DocTemplateDocumentData>): DocTemplateDocumentData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DocTemplateDocumentData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
