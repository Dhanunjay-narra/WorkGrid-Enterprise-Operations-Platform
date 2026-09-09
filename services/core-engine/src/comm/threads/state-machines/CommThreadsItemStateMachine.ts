export type CommThreadsItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommThreadsItemStateMachine {
  private allowedTransitions: Record<CommThreadsItemState, CommThreadsItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommThreadsItemState, to: CommThreadsItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommThreadsItemState, to: CommThreadsItemState): CommThreadsItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommThreadsItem: " + from + " -> " + to);
    }
    return to;
  }
}
