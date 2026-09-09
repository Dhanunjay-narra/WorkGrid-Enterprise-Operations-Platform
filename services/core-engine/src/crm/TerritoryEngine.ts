import { UUID } from '@nexora/types';

export interface SalesTerritory {
  id: UUID;
  tenantId: UUID;
  name: string;
  region: string;
  countries: string[];
  assignedRepIds: UUID[];
  quotaAmount: number;
}

export class TerritoryEngine {
  private territories = new Map<UUID, SalesTerritory>();

  public createTerritory(tenantId: UUID, name: string, region: string, countries: string[], quota: number): SalesTerritory {
    const territory: SalesTerritory = {
      id: 'terr_' + crypto.randomUUID(),
      tenantId,
      name,
      region,
      countries,
      assignedRepIds: [],
      quotaAmount: quota
    };
    this.territories.set(territory.id, territory);
    return territory;
  }

  public assignRep(territoryId: UUID, repId: UUID): boolean {
    const terr = this.territories.get(territoryId);
    if (!terr) return false;
    if (!terr.assignedRepIds.includes(repId)) {
      terr.assignedRepIds.push(repId);
    }
    return true;
  }

  public findTerritoryForCountry(tenantId: UUID, country: string): SalesTerritory | undefined {
    return Array.from(this.territories.values()).find(
      t => t.tenantId === tenantId && t.countries.map(c => c.toUpperCase()).includes(country.toUpperCase())
    );
  }
}
