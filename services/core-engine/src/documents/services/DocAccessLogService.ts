import { DocAccessLogData, DocAccessLogValidator } from "../../../../packages/types/src/domains/documents/DocAccessLog";

export class DocAccessLogService {
  private repository = new Map<string, DocAccessLogData>();

  public create(data: Omit<DocAccessLogData, "id" | "createdAt" | "updatedAt">): DocAccessLogData {
    const id = "doc_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: DocAccessLogData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = DocAccessLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DocAccessLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DocAccessLogData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): DocAccessLogData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<DocAccessLogData>): DocAccessLogData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DocAccessLogData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
