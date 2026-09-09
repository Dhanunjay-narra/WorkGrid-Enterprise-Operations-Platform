export type InventoryStockRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryStockRecordStateMachine {
  private allowedTransitions: Record<InventoryStockRecordState, InventoryStockRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryStockRecordState, to: InventoryStockRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryStockRecordState, to: InventoryStockRecordState): InventoryStockRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryStockRecord: " + from + " -> " + to);
    }
    return to;
  }
}
