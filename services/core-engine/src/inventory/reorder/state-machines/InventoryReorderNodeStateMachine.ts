export type InventoryReorderNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryReorderNodeStateMachine {
  private allowedTransitions: Record<InventoryReorderNodeState, InventoryReorderNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryReorderNodeState, to: InventoryReorderNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryReorderNodeState, to: InventoryReorderNodeState): InventoryReorderNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryReorderNode: " + from + " -> " + to);
    }
    return to;
  }
}
