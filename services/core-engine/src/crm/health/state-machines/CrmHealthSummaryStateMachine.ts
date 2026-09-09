export type CrmHealthSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmHealthSummaryStateMachine {
  private allowedTransitions: Record<CrmHealthSummaryState, CrmHealthSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmHealthSummaryState, to: CrmHealthSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmHealthSummaryState, to: CrmHealthSummaryState): CrmHealthSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmHealthSummary: " + from + " -> " + to);
    }
    return to;
  }
}
