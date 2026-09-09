export type InventoryStockMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryStockMappingStateMachine {
  private allowedTransitions: Record<InventoryStockMappingState, InventoryStockMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryStockMappingState, to: InventoryStockMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryStockMappingState, to: InventoryStockMappingState): InventoryStockMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryStockMapping: " + from + " -> " + to);
    }
    return to;
  }
}
