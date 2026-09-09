export type CrmPipelineStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmPipelineStateStateMachine {
  private allowedTransitions: Record<CrmPipelineStateState, CrmPipelineStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmPipelineStateState, to: CrmPipelineStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmPipelineStateState, to: CrmPipelineStateState): CrmPipelineStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmPipelineState: " + from + " -> " + to);
    }
    return to;
  }
}
