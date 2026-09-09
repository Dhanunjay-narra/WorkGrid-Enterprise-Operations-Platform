export type IntOauthTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntOauthTaskStateMachine {
  private allowedTransitions: Record<IntOauthTaskState, IntOauthTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntOauthTaskState, to: IntOauthTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntOauthTaskState, to: IntOauthTaskState): IntOauthTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntOauthTask: " + from + " -> " + to);
    }
    return to;
  }
}
