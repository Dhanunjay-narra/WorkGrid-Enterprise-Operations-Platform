export type CommCallsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommCallsItemStateMachine {
  private allowedTransitions: Record<CommCallsItemState, CommCallsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommCallsItemState, to: CommCallsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommCallsItemState, to: CommCallsItemState): CommCallsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommCallsItem: " + from + " -> " + to);
    }
    return to;
  }
}
