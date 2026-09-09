export type TenancyAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class TenancyAssignmentStateMachine {
  private allowedTransitions: Record<TenancyAssignmentState, TenancyAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: TenancyAssignmentState, to: TenancyAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: TenancyAssignmentState, to: TenancyAssignmentState): TenancyAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for TenancyAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
