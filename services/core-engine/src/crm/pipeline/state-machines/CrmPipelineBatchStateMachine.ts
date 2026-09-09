export type CrmPipelineBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmPipelineBatchStateMachine {
  private allowedTransitions: Record<CrmPipelineBatchState, CrmPipelineBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmPipelineBatchState, to: CrmPipelineBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmPipelineBatchState, to: CrmPipelineBatchState): CrmPipelineBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmPipelineBatch: " + from + " -> " + to);
    }
    return to;
  }
}
