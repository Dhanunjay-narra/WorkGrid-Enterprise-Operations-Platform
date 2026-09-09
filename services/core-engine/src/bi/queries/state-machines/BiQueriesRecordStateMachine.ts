export type BiQueriesRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiQueriesRecordStateMachine {
  private allowedTransitions: Record<BiQueriesRecordState, BiQueriesRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiQueriesRecordState, to: BiQueriesRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiQueriesRecordState, to: BiQueriesRecordState): BiQueriesRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiQueriesRecord: " + from + " -> " + to);
    }
    return to;
  }
}
