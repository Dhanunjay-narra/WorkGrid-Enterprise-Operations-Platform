export type CrmPipelinePolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmPipelinePolicyStateMachine {
  private allowedTransitions: Record<CrmPipelinePolicyState, CrmPipelinePolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmPipelinePolicyState, to: CrmPipelinePolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmPipelinePolicyState, to: CrmPipelinePolicyState): CrmPipelinePolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmPipelinePolicy: " + from + " -> " + to);
    }
    return to;
  }
}
