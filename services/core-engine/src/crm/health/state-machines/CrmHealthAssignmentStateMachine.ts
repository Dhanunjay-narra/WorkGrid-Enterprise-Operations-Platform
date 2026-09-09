export type CrmHealthAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmHealthAssignmentStateMachine {
  private allowedTransitions: Record<CrmHealthAssignmentState, CrmHealthAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmHealthAssignmentState, to: CrmHealthAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmHealthAssignmentState, to: CrmHealthAssignmentState): CrmHealthAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmHealthAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
