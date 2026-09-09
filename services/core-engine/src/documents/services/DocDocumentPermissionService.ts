import { DocDocumentPermissionData, DocDocumentPermissionValidator } from "../../../../packages/types/src/domains/documents/DocDocumentPermission";

export class DocDocumentPermissionService {
  private repository = new Map<string, DocDocumentPermissionData>();

  public create(data: Omit<DocDocumentPermissionData, "id" | "createdAt" | "updatedAt">): DocDocumentPermissionData {
    const id = "doc_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: DocDocumentPermissionData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = DocDocumentPermissionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DocDocumentPermission: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DocDocumentPermissionData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): DocDocumentPermissionData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<DocDocumentPermissionData>): DocDocumentPermissionData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DocDocumentPermissionData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
