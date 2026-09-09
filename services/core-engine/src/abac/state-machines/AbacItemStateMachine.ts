export type AbacItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AbacItemStateMachine {
  private allowedTransitions: Record<AbacItemState, AbacItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AbacItemState, to: AbacItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AbacItemState, to: AbacItemState): AbacItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AbacItem: " + from + " -> " + to);
    }
    return to;
  }
}
