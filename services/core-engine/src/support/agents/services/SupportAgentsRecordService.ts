import { SupportAgentsRecordModel, SupportAgentsRecordValidator } from "@nexora/types/domains/support/agents/SupportAgentsRecord";

export class SupportAgentsRecordService {
  private repository = new Map<string, SupportAgentsRecordModel>();

  public create(data: Omit<SupportAgentsRecordModel, "id" | "version" | "createdAt" | "updatedAt">): SupportAgentsRecordModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportAgentsRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportAgentsRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportAgentsRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportAgentsRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportAgentsRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportAgentsRecordModel>): SupportAgentsRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportAgentsRecordModel = {
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
