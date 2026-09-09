export type CrmPipelineNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmPipelineNodeStateMachine {
  private allowedTransitions: Record<CrmPipelineNodeState, CrmPipelineNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmPipelineNodeState, to: CrmPipelineNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmPipelineNodeState, to: CrmPipelineNodeState): CrmPipelineNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmPipelineNode: " + from + " -> " + to);
    }
    return to;
  }
}
