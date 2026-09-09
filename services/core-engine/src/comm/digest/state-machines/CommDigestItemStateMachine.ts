export type CommDigestItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommDigestItemStateMachine {
  private allowedTransitions: Record<CommDigestItemState, CommDigestItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommDigestItemState, to: CommDigestItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommDigestItemState, to: CommDigestItemState): CommDigestItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommDigestItem: " + from + " -> " + to);
    }
    return to;
  }
}
