export type CommCallsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommCallsEntryStateMachine {
  private allowedTransitions: Record<CommCallsEntryState, CommCallsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommCallsEntryState, to: CommCallsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommCallsEntryState, to: CommCallsEntryState): CommCallsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommCallsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
