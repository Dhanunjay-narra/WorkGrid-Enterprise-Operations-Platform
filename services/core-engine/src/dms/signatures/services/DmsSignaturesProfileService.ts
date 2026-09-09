import { DmsSignaturesProfileModel, DmsSignaturesProfileValidator } from "@nexora/types/domains/dms/signatures/DmsSignaturesProfile";

export class DmsSignaturesProfileService {
  private repository = new Map<string, DmsSignaturesProfileModel>();

  public create(data: Omit<DmsSignaturesProfileModel, "id" | "version" | "createdAt" | "updatedAt">): DmsSignaturesProfileModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsSignaturesProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsSignaturesProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsSignaturesProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsSignaturesProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsSignaturesProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsSignaturesProfileModel>): DmsSignaturesProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsSignaturesProfileModel = {
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
