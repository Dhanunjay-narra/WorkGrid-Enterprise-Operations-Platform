import { DocFolderData, DocFolderValidator } from "../../../../packages/types/src/domains/documents/DocFolder";

export class DocFolderService {
  private repository = new Map<string, DocFolderData>();

  public create(data: Omit<DocFolderData, "id" | "createdAt" | "updatedAt">): DocFolderData {
    const id = "doc_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: DocFolderData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = DocFolderValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DocFolder: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DocFolderData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): DocFolderData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<DocFolderData>): DocFolderData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DocFolderData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
