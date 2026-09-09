export type CrmDealsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmDealsAssignmentStateMachine {
  private allowedTransitions: Record<CrmDealsAssignmentState, CrmDealsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmDealsAssignmentState, to: CrmDealsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmDealsAssignmentState, to: CrmDealsAssignmentState): CrmDealsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmDealsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
