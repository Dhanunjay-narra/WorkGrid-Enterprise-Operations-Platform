import { CompliancePayloadModel, CompliancePayloadValidator } from "@nexora/types/domains/compliance/CompliancePayload";

export class CompliancePayloadService {
  private repository = new Map<string, CompliancePayloadModel>();

  public create(data: Omit<CompliancePayloadModel, "id" | "version" | "createdAt" | "updatedAt">): CompliancePayloadModel {
    const id = "comp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CompliancePayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CompliancePayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CompliancePayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CompliancePayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CompliancePayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CompliancePayloadModel>): CompliancePayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CompliancePayloadModel = {
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
