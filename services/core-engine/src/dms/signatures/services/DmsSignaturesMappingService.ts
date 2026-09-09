import { DmsSignaturesMappingModel, DmsSignaturesMappingValidator } from "@nexora/types/domains/dms/signatures/DmsSignaturesMapping";

export class DmsSignaturesMappingService {
  private repository = new Map<string, DmsSignaturesMappingModel>();

  public create(data: Omit<DmsSignaturesMappingModel, "id" | "version" | "createdAt" | "updatedAt">): DmsSignaturesMappingModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsSignaturesMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsSignaturesMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsSignaturesMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsSignaturesMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsSignaturesMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsSignaturesMappingModel>): DmsSignaturesMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsSignaturesMappingModel = {
      ...existing,
      ...updates,
      version: existing.version + 1,
      updatedAt: new Date().toISOString()
    };
    this.repository.set(id, updated);
    return updated;
  }

  public remove(id: string): boolean {
    return this.repository.delete(id);
  }
}
