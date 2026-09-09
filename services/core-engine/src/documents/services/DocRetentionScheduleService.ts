import { DocRetentionScheduleData, DocRetentionScheduleValidator } from "../../../../packages/types/src/domains/documents/DocRetentionSchedule";

export class DocRetentionScheduleService {
  private repository = new Map<string, DocRetentionScheduleData>();

  public create(data: Omit<DocRetentionScheduleData, "id" | "createdAt" | "updatedAt">): DocRetentionScheduleData {
    const id = "doc_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: DocRetentionScheduleData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = DocRetentionScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DocRetentionSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DocRetentionScheduleData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): DocRetentionScheduleData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<DocRetentionScheduleData>): DocRetentionScheduleData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DocRetentionScheduleData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
