export type CommThreadsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommThreadsEntryStateMachine {
  private allowedTransitions: Record<CommThreadsEntryState, CommThreadsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommThreadsEntryState, to: CommThreadsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommThreadsEntryState, to: CommThreadsEntryState): CommThreadsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommThreadsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
