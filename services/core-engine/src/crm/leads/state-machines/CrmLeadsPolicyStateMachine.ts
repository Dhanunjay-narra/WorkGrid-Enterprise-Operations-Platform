export type CrmLeadsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmLeadsPolicyStateMachine {
  private allowedTransitions: Record<CrmLeadsPolicyState, CrmLeadsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmLeadsPolicyState, to: CrmLeadsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmLeadsPolicyState, to: CrmLeadsPolicyState): CrmLeadsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmLeadsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
