export type InventoryReorderSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryReorderSessionStateMachine {
  private allowedTransitions: Record<InventoryReorderSessionState, InventoryReorderSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryReorderSessionState, to: InventoryReorderSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryReorderSessionState, to: InventoryReorderSessionState): InventoryReorderSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryReorderSession: " + from + " -> " + to);
    }
    return to;
  }
}
