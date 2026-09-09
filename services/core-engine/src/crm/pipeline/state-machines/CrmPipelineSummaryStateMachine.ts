export type CrmPipelineSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmPipelineSummaryStateMachine {
  private allowedTransitions: Record<CrmPipelineSummaryState, CrmPipelineSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmPipelineSummaryState, to: CrmPipelineSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmPipelineSummaryState, to: CrmPipelineSummaryState): CrmPipelineSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmPipelineSummary: " + from + " -> " + to);
    }
    return to;
  }
}
