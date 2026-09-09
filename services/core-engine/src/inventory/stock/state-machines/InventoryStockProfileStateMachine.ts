export type InventoryStockProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryStockProfileStateMachine {
  private allowedTransitions: Record<InventoryStockProfileState, InventoryStockProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryStockProfileState, to: InventoryStockProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryStockProfileState, to: InventoryStockProfileState): InventoryStockProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryStockProfile: " + from + " -> " + to);
    }
    return to;
  }
}
