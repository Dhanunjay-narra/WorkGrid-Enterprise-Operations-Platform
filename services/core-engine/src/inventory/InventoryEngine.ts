import { SKUItem, UUID } from '@nexora/types';

export class InventoryEngine {
  private skus = new Map<UUID, SKUItem>();
  private stock = new Map<string, number>();

  public registerSKU(tenantId: UUID, sku: string, name: string, cost: number, price: number): SKUItem {
    const item: SKUItem = {
      id: 'sku_' + Math.random().toString(36).substring(2, 9),
      tenantId,
      sku,
      name,
      costPrice: cost,
      sellingPrice: price
    };
    this.skus.set(item.id, item);
    return item;
  }

  public updateStock(skuId: UUID, warehouseId: UUID, qtyDelta: number): number {
    const key = `${skuId}_${warehouseId}`;
    const current = this.stock.get(key) || 0;
    const updated = Math.max(0, current + qtyDelta);
    this.stock.set(key, updated);
    return updated;
  }
}
