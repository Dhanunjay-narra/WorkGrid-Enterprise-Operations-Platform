export type BiQueriesProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiQueriesProfileStateMachine {
  private allowedTransitions: Record<BiQueriesProfileState, BiQueriesProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiQueriesProfileState, to: BiQueriesProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiQueriesProfileState, to: BiQueriesProfileState): BiQueriesProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiQueriesProfile: " + from + " -> " + to);
    }
    return to;
  }
}
