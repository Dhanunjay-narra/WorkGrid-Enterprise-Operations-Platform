export type CrmLeadsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmLeadsSummaryStateMachine {
  private allowedTransitions: Record<CrmLeadsSummaryState, CrmLeadsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmLeadsSummaryState, to: CrmLeadsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmLeadsSummaryState, to: CrmLeadsSummaryState): CrmLeadsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmLeadsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
