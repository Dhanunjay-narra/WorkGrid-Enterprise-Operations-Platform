import { DocDocumentSignatureData, DocDocumentSignatureValidator } from "../../../../packages/types/src/domains/documents/DocDocumentSignature";

export class DocDocumentSignatureService {
  private repository = new Map<string, DocDocumentSignatureData>();

  public create(data: Omit<DocDocumentSignatureData, "id" | "createdAt" | "updatedAt">): DocDocumentSignatureData {
    const id = "doc_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: DocDocumentSignatureData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = DocDocumentSignatureValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DocDocumentSignature: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DocDocumentSignatureData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): DocDocumentSignatureData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<DocDocumentSignatureData>): DocDocumentSignatureData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DocDocumentSignatureData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
