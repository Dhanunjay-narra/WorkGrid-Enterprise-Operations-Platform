import { ComplianceQueueModel, ComplianceQueueValidator } from "@nexora/types/domains/compliance/ComplianceQueue";

export class ComplianceQueueService {
  private repository = new Map<string, ComplianceQueueModel>();

  public create(data: Omit<ComplianceQueueModel, "id" | "version" | "createdAt" | "updatedAt">): ComplianceQueueModel {
    const id = "comp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ComplianceQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ComplianceQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ComplianceQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ComplianceQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ComplianceQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ComplianceQueueModel>): ComplianceQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ComplianceQueueModel = {
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
