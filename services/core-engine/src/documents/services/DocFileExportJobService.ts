import { DocFileExportJobData, DocFileExportJobValidator } from "../../../../packages/types/src/domains/documents/DocFileExportJob";

export class DocFileExportJobService {
  private repository = new Map<string, DocFileExportJobData>();

  public create(data: Omit<DocFileExportJobData, "id" | "createdAt" | "updatedAt">): DocFileExportJobData {
    const id = "doc_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: DocFileExportJobData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = DocFileExportJobValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DocFileExportJob: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DocFileExportJobData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): DocFileExportJobData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<DocFileExportJobData>): DocFileExportJobData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DocFileExportJobData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
