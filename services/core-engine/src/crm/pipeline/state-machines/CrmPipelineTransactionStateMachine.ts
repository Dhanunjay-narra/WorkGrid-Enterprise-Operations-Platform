export type CrmPipelineTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmPipelineTransactionStateMachine {
  private allowedTransitions: Record<CrmPipelineTransactionState, CrmPipelineTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmPipelineTransactionState, to: CrmPipelineTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmPipelineTransactionState, to: CrmPipelineTransactionState): CrmPipelineTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmPipelineTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
