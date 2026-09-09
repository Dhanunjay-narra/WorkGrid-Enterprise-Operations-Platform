import { DocOcrExtractedDataData, DocOcrExtractedDataValidator } from "../../../../packages/types/src/domains/documents/DocOcrExtractedData";

export class DocOcrExtractedDataService {
  private repository = new Map<string, DocOcrExtractedDataData>();

  public create(data: Omit<DocOcrExtractedDataData, "id" | "createdAt" | "updatedAt">): DocOcrExtractedDataData {
    const id = "doc_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: DocOcrExtractedDataData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = DocOcrExtractedDataValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DocOcrExtractedData: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DocOcrExtractedDataData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): DocOcrExtractedDataData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<DocOcrExtractedDataData>): DocOcrExtractedDataData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DocOcrExtractedDataData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
