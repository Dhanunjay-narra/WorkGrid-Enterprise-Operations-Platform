export type CrmContactsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmContactsAssignmentStateMachine {
  private allowedTransitions: Record<CrmContactsAssignmentState, CrmContactsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmContactsAssignmentState, to: CrmContactsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmContactsAssignmentState, to: CrmContactsAssignmentState): CrmContactsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmContactsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
