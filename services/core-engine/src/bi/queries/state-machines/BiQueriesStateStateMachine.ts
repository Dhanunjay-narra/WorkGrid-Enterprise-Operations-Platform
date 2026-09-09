export type BiQueriesStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiQueriesStateStateMachine {
  private allowedTransitions: Record<BiQueriesStateState, BiQueriesStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiQueriesStateState, to: BiQueriesStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiQueriesStateState, to: BiQueriesStateState): BiQueriesStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiQueriesState: " + from + " -> " + to);
    }
    return to;
  }
}
