export type InventoryStockEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryStockEntryStateMachine {
  private allowedTransitions: Record<InventoryStockEntryState, InventoryStockEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryStockEntryState, to: InventoryStockEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryStockEntryState, to: InventoryStockEntryState): InventoryStockEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryStockEntry: " + from + " -> " + to);
    }
    return to;
  }
}
