export type BiQueriesConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiQueriesConfigStateMachine {
  private allowedTransitions: Record<BiQueriesConfigState, BiQueriesConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiQueriesConfigState, to: BiQueriesConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiQueriesConfigState, to: BiQueriesConfigState): BiQueriesConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiQueriesConfig: " + from + " -> " + to);
    }
    return to;
  }
}
