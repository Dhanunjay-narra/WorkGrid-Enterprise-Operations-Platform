export type CommThreadsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommThreadsStateStateMachine {
  private allowedTransitions: Record<CommThreadsStateState, CommThreadsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommThreadsStateState, to: CommThreadsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommThreadsStateState, to: CommThreadsStateState): CommThreadsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommThreadsState: " + from + " -> " + to);
    }
    return to;
  }
}
