export type BiQueriesSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiQueriesSessionStateMachine {
  private allowedTransitions: Record<BiQueriesSessionState, BiQueriesSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiQueriesSessionState, to: BiQueriesSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiQueriesSessionState, to: BiQueriesSessionState): BiQueriesSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiQueriesSession: " + from + " -> " + to);
    }
    return to;
  }
}
