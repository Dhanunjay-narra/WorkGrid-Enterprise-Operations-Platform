export type BiQueriesItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiQueriesItemStateMachine {
  private allowedTransitions: Record<BiQueriesItemState, BiQueriesItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiQueriesItemState, to: BiQueriesItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiQueriesItemState, to: BiQueriesItemState): BiQueriesItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiQueriesItem: " + from + " -> " + to);
    }
    return to;
  }
}
