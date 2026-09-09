export type BiQueriesEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiQueriesEventStateMachine {
  private allowedTransitions: Record<BiQueriesEventState, BiQueriesEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiQueriesEventState, to: BiQueriesEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiQueriesEventState, to: BiQueriesEventState): BiQueriesEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiQueriesEvent: " + from + " -> " + to);
    }
    return to;
  }
}
