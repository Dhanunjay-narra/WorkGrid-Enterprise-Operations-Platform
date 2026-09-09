export type BiQueriesEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiQueriesEntryStateMachine {
  private allowedTransitions: Record<BiQueriesEntryState, BiQueriesEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiQueriesEntryState, to: BiQueriesEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiQueriesEntryState, to: BiQueriesEntryState): BiQueriesEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiQueriesEntry: " + from + " -> " + to);
    }
    return to;
  }
}
