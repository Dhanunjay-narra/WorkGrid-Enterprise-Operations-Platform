export type RbacTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class RbacTaskStateMachine {
  private allowedTransitions: Record<RbacTaskState, RbacTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: RbacTaskState, to: RbacTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: RbacTaskState, to: RbacTaskState): RbacTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for RbacTask: " + from + " -> " + to);
    }
    return to;
  }
}
