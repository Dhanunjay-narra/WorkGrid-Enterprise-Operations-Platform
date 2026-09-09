export type InventoryReorderEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryReorderEntryStateMachine {
  private allowedTransitions: Record<InventoryReorderEntryState, InventoryReorderEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryReorderEntryState, to: InventoryReorderEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryReorderEntryState, to: InventoryReorderEntryState): InventoryReorderEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryReorderEntry: " + from + " -> " + to);
    }
    return to;
  }
}
