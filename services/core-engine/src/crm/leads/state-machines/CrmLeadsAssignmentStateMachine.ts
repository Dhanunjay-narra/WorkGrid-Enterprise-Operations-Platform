export type CrmLeadsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmLeadsAssignmentStateMachine {
  private allowedTransitions: Record<CrmLeadsAssignmentState, CrmLeadsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmLeadsAssignmentState, to: CrmLeadsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmLeadsAssignmentState, to: CrmLeadsAssignmentState): CrmLeadsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmLeadsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
