export type CrmTerritoryAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmTerritoryAssignmentStateMachine {
  private allowedTransitions: Record<CrmTerritoryAssignmentState, CrmTerritoryAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmTerritoryAssignmentState, to: CrmTerritoryAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmTerritoryAssignmentState, to: CrmTerritoryAssignmentState): CrmTerritoryAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmTerritoryAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
