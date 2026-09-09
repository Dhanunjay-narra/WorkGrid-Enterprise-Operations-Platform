export type InventoryStockSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryStockSessionStateMachine {
  private allowedTransitions: Record<InventoryStockSessionState, InventoryStockSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryStockSessionState, to: InventoryStockSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryStockSessionState, to: InventoryStockSessionState): InventoryStockSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryStockSession: " + from + " -> " + to);
    }
    return to;
  }
}
