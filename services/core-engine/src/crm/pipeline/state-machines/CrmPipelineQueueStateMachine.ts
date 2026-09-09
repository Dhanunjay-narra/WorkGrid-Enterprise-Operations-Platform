export type CrmPipelineQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmPipelineQueueStateMachine {
  private allowedTransitions: Record<CrmPipelineQueueState, CrmPipelineQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmPipelineQueueState, to: CrmPipelineQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmPipelineQueueState, to: CrmPipelineQueueState): CrmPipelineQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmPipelineQueue: " + from + " -> " + to);
    }
    return to;
  }
}
