import { DocWatermarkConfigData, DocWatermarkConfigValidator } from "../../../../packages/types/src/domains/documents/DocWatermarkConfig";

export class DocWatermarkConfigService {
  private repository = new Map<string, DocWatermarkConfigData>();

  public create(data: Omit<DocWatermarkConfigData, "id" | "createdAt" | "updatedAt">): DocWatermarkConfigData {
    const id = "doc_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: DocWatermarkConfigData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = DocWatermarkConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DocWatermarkConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DocWatermarkConfigData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): DocWatermarkConfigData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<DocWatermarkConfigData>): DocWatermarkConfigData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DocWatermarkConfigData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
