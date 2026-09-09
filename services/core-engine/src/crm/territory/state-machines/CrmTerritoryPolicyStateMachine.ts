export type CrmTerritoryPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmTerritoryPolicyStateMachine {
  private allowedTransitions: Record<CrmTerritoryPolicyState, CrmTerritoryPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmTerritoryPolicyState, to: CrmTerritoryPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmTerritoryPolicyState, to: CrmTerritoryPolicyState): CrmTerritoryPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmTerritoryPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
