export type IdentityTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IdentityTaskStateMachine {
  private allowedTransitions: Record<IdentityTaskState, IdentityTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IdentityTaskState, to: IdentityTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IdentityTaskState, to: IdentityTaskState): IdentityTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IdentityTask: " + from + " -> " + to);
    }
    return to;
  }
}
