export type BiQueriesTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiQueriesTaskStateMachine {
  private allowedTransitions: Record<BiQueriesTaskState, BiQueriesTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiQueriesTaskState, to: BiQueriesTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiQueriesTaskState, to: BiQueriesTaskState): BiQueriesTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiQueriesTask: " + from + " -> " + to);
    }
    return to;
  }
}
