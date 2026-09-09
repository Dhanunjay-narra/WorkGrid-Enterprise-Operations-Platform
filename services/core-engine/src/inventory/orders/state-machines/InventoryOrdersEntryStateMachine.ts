export type InventoryOrdersEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryOrdersEntryStateMachine {
  private allowedTransitions: Record<InventoryOrdersEntryState, InventoryOrdersEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryOrdersEntryState, to: InventoryOrdersEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryOrdersEntryState, to: InventoryOrdersEntryState): InventoryOrdersEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryOrdersEntry: " + from + " -> " + to);
    }
    return to;
  }
}
