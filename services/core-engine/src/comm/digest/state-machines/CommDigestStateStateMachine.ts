export type CommDigestStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommDigestStateStateMachine {
  private allowedTransitions: Record<CommDigestStateState, CommDigestStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommDigestStateState, to: CommDigestStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommDigestStateState, to: CommDigestStateState): CommDigestStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommDigestState: " + from + " -> " + to);
    }
    return to;
  }
}
