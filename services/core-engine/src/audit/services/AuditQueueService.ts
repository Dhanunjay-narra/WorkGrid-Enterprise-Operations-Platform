import { AuditQueueModel, AuditQueueValidator } from "@nexora/types/domains/audit/AuditQueue";

export class AuditQueueService {
  private repository = new Map<string, AuditQueueModel>();

  public create(data: Omit<AuditQueueModel, "id" | "version" | "createdAt" | "updatedAt">): AuditQueueModel {
    const id = "audi_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuditQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuditQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuditQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuditQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuditQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuditQueueModel>): AuditQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuditQueueModel = {
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
